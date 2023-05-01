import { TweetCard } from 'components/TweetCard/TweetCard';
import css from './TweetCardList.module.css';
import { useEffect, useState } from 'react';
import { getUsers } from 'components/Api/apiUsers';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { toast } from 'react-hot-toast';
import { Loader } from '../Loader/Loader';
import { nanoid } from 'nanoid';
import { ClearStorageBtn } from 'components/ClearStorageBtn/ClearStorageBtn';

export const TweetCardList = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem('page')) || 1
  );
  const [isLoading, setIsLoading] = useState(false);

  const updateUser = data => {
    return data.map(user => ({
      ...user,
      isFollow: user.isFollow ? user.isFollow : false,
    }));
  };

  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        const data = await getUsers(1);
        const updatedUsers = updateUser(data);
        const userLocalStorage = JSON.parse(localStorage.getItem('users'));

        if (userLocalStorage) {
          setUsers(userLocalStorage);
        } else {
          setUsers(updatedUsers);
          localStorage.setItem('users', JSON.stringify(updatedUsers));
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
      }
    }
    getUser();
  }, []);

  const toggleFollowers = (id, value, count) => {
    const updatedStatus = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          isFollow: value,
          followers: count === 'plus' ? user.followers + 1 : user.followers - 1,
        };
      } else {
        return user;
      }
    });
    localStorage.setItem('users', JSON.stringify(updatedStatus));
    setUsers(updatedStatus);
  };

  const loadMore = async () => {
    try {
      setIsLoading(true);
      const data = await getUsers(page + 1);
      const updatedUsers = updateUser(data);

      setUsers(prevState => [...prevState, ...updatedUsers]);
      localStorage.setItem(
        'users',
        JSON.stringify([...users, ...updatedUsers])
      );

      setPage(prevState => prevState + 1);
      localStorage.setItem('page', JSON.stringify(page + 1));
      if (updatedUsers.length === 0) {
        toast.error('Sorry we have not more users');
      } else {
        toast.success('Congratulation you added more users');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const cleanStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className={css.cardListWrapper}>
        <ul>
          {users.map(({ id, tweets, user, followers, avatar, isFollow }) => {
            return (
              <li className={css.cardListItem} key={nanoid()}>
                <TweetCard
                  id={id}
                  isFollow={isFollow}
                  tweets={tweets}
                  name={user}
                  followers={followers}
                  avatar={avatar}
                  toggleFollowers={toggleFollowers}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {users.length > 0 && !isLoading ? (
        <LoadMoreBtn loadMore={loadMore} />
      ) : (
        <Loader />
      )}
      {users.length >= 12 && !isLoading && (
        <ClearStorageBtn clear={cleanStorage} />
      )}
    </>
  );
};
