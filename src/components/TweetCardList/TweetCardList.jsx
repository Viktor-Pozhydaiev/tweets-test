import { TweetCard } from 'components/TweetCard/TweetCard';
import css from './TweetCardList.module.css';
import { useEffect, useState } from 'react';
import { getUsers } from 'components/Api/apiUsers';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { toast } from 'react-hot-toast';
import { Loader } from '../Loader/Loader';

export const TweetCardList = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );
  const [loadTweets, setLoadTweets] = useState(
    JSON.parse(localStorage.getItem('loadTweets')) || 3
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
        const data = await getUsers(3);
        const updateUsers = updateUser(data);
        const userLocalStorage = JSON.parse(localStorage.getItem('users'));

        if (userLocalStorage) {
          setUsers(userLocalStorage);
        } else {
          setUsers(updateUsers);
          localStorage.setItem('users', JSON.stringify(updateUsers));
        }

        // if (users.length > 0) {
        //   setUsers(users);

        setIsLoading(false);
        // }
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
      }
    }
    getUser();
  }, []);

  const toggleFollowers = (id, value, count) => {
    const updateStatus = users.map(user => {
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
    localStorage.setItem('users', JSON.stringify(updateStatus));
    setUsers(updateStatus);
  };

  const loadMore = async () => {
    try {
      setIsLoading(true);
      const data = await getUsers(loadTweets + 3);
      const updateUsers = updateUser(data);

      setUsers(prevState => [...prevState, ...updateUsers]);
      localStorage.setItem('users', JSON.stringify([...users, ...updateUsers]));

      setLoadTweets(prevState => prevState + 3);
      localStorage.setItem('loadTweets', JSON.stringify(loadTweets + 3));
    } catch (error) {
      toast.error(error.message);
    } finally {
      isLoading(false);
    }
  };
  return (
    <>
      <div className={css.cardListWrapper}>
        <ul>
          {users.map(({ id, tweets, user, followers, avatar, isFollow }) => {
            return (
              <li className={css.cardListItem} key={id}>
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
      {/* <LoadMoreBtn loadMore={loadMore} /> */}
    </>
  );
};
