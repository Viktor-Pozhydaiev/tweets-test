import { getUsers } from 'components/Api/apiUsers';
import { ClearStorageBtn } from 'components/ClearStorageBtn/ClearStorageBtn';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { Loader } from 'components/Loader/Loader';
import { TweetCardList } from 'components/TweetCardList/TweetCardList';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const TweetsPage = () => {
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
    window.location.reload();
  };

  return (
    <>
      <TweetCardList toggleFollowers={toggleFollowers} users={users} />

      <Toaster position="top-right" />

      {users.length > 0 && users.length < 12 && !isLoading ? (
        <LoadMoreBtn loadMore={loadMore} />
      ) : (
        <ClearStorageBtn clear={cleanStorage} />
      )}
      {isLoading && <Loader />}
    </>
  );
};
export default TweetsPage;
