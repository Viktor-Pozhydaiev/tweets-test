import { TweetCard } from 'components/TweetCard/TweetCard';
import css from './TweetCardList.module.css';

export const TweetCardList = ({ users, addFollowers }) => {
  return (
    <div className={css.cardListWrapper}>
      <ul>
        {users.map(({ id, tweets, user, followers, avatar }) => {
          return (
            <TweetCard
              key={id}
              tweets={tweets}
              name={user}
              followers={followers}
              avatar={avatar}
              addFollowers={addFollowers}
            />
          );
        })}
      </ul>
    </div>
  );
};
