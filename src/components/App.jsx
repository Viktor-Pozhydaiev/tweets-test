import { useEffect } from 'react';
import { getUsers } from 'components/Api/apiUsers';
import { useState } from 'react';
import { TweetCardList } from './TweetCardList/TweetCardList';

export const App = () => {
  const [state, setState] = useState([]);
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
        const users = await getUsers();
        if (users.length > 0) {
          setState(users);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getUser();
    // window.localStorage.setItem('follow', JSON.stringify(follow));
  }, [state]);

  const addFollowers = evt => {
    const id = evt.target.id;
    console.log(state);
    console.log(id);
  };

  return (
    <>
      <TweetCardList users={state} addFollowers={addFollowers} />
    </>
  );
};
