import { TweetCard } from 'components/TweetCard/TweetCard';
import css from './TweetCardList.module.css';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';

export const TweetCardList = ({ users, toggleFollowers }) => {
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
    </>
  );
};

TweetCardList.propTypes = {
  toggleFollowers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};
