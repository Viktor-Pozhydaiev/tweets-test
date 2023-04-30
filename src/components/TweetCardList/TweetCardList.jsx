import { TweetCard } from 'components/TweetCard/TweetCard';
import css from './TweetCardList.module.css';

export const TweetCardList = ({ users, addFollowers }) => {
  return (
    <div className={css.cardListWrapper}>
      <ul>
        {users.map(({ id, tweets, user, followers, avatar }) => {
          return (
            <li className={css.cardListItem} key={id}>
              <TweetCard
                tweets={tweets}
                name={user}
                followers={followers}
                avatar={avatar}
                addFollowers={addFollowers}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
