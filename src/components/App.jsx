import { useEffect } from 'react';
import { getUsers } from 'components/Api/apiUsers';
import { useState } from 'react';
import { TweetCardList } from './TweetCardList/TweetCardList';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

export const App = () => {
  const [state, setState] = useState([]);
  const [loadTweets, setLoadTweets] = useState(3);
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
        const users = await getUsers(loadTweets);
        if (users.length > 0) {
          setState(users);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getUser();
    // window.localStorage.setItem('follow', JSON.stringify(follow));
  }, [loadTweets]);

  const addFollowers = evt => {
    const id = evt.target.id;
    console.log(state);
    console.log(id);
  };

  const loadMore = () => {
    setLoadTweets(prevState => prevState + 3);
  };

  return (
    <>
      <TweetCardList users={state} addFollowers={addFollowers} />
      <LoadMoreBtn loadMore={loadMore} />
    </>
  );
};
