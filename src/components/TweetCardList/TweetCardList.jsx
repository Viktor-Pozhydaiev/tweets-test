import { TweetCard } from 'components/TweetCard/TweetCard';
import css from './TweetCardList.module.css';
import { useEffect, useState } from 'react';
import { getUsers } from 'components/Api/apiUsers';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { toast } from 'react-hot-toast';
import { Loader } from '../Loader/Loader';

export const TweetCardList = () => {
  const [users, setUsers] = useState([]);
  const [loadTweets, setLoadTweets] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

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
      <div className={css.cardListWrapper}>
        <ul>
          {users.map(({ id, tweets, user, followers, avatar }) => {
            return (
              <li className={css.cardListItem} key={id}>
                <TweetCard
                  id={id}
                  tweets={tweets}
                  name={user}
                  followers={followers}
                  avatar={avatar}
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
    </>
  );
};
