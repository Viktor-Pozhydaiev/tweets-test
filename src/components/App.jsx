import { useEffect } from 'react';
import { getUsers } from 'components/Api/apiUsers';
import { useState } from 'react';
import { TweetCardList } from './TweetCardList/TweetCardList';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { toast, Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [loadTweets, setLoadTweets] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  //  {
  //   const saveFollowers = localStorage.getItem('follow');

  //   if (saveFollowers !== null) {
  //     const parcFollowers = JSON.parse(saveFollowers);
  //     return parcFollowers;
  //   }
  //   return [];
  // });
  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        const users = await getUsers(loadTweets);
        if (users.length > 0) {
          setUsers(users);

          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
      }
    }
    getUser();
    // window.localStorage.setItem('follow', JSON.stringify(follow));
  }, [loadTweets]);

  const addFollowers = evt => {
    const id = evt.currentTarget;
    console.log(id);
  };

  const loadMore = () => {
    setLoadTweets(prevState => prevState + 3);
    if (users.length >= loadTweets) {
      toast.success(`Your loaded ${users.length} users more`);
    } else {
      toast.error('Sorry you have not more users');
    }
  };
  return (
    <>
      <TweetCardList users={users} addFollowers={addFollowers} />
      {users.length > 0 && !isLoading ? (
        <LoadMoreBtn loadMore={loadMore} />
      ) : (
        <Loader />
      )}
      <Toaster position="top-right" />
    </>
  );
};
