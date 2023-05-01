import css from './TweetCard.module.css';
import Logo from '../../images/Vector.svg';
import { FollowButton } from '../FollowButton/FollowButton';
import { User } from 'components/User/User';
import { FollowingBtn } from 'components/FollowingBtn/FollowingBtn';
import { PropTypes } from 'prop-types';
import { toast } from 'react-hot-toast';

export const TweetCard = ({
  id,
  tweets,
  followers,
  avatar,
  toggleFollowers,
  isFollow,
}) => {
  const toggleFollow = id => {
    if (!isFollow) {
      toggleFollowers(id, true, 'plus');
      toast.success('You are following !');
    } else {
      toggleFollowers(id, false, 'minus');
      toast.error('You are unsubscribed !');
    }
  };

  return (
    <div className={css.card}>
      <a href="https://goit.global/ua/">
        <img className={css.imageLogo} src={Logo} alt="Logo" />
      </a>
      <div>
        <div className={css.backgroundImg}></div>
        <User avatar={avatar} />
        <div className={css.followControl}>
          <div className={css.textWrap}>
            <p className={css.tweets}>777 {tweets}</p>
            <p className={css.followers}>
              {followers.toLocaleString('en-US')}
              <span className={css.followersText}>followers</span>
            </p>
          </div>

          <div className={css.btnWrapper}>
            {isFollow === false ? (
              <FollowButton addFollowers={() => toggleFollow(id)} />
            ) : (
              <FollowingBtn removeFollowers={() => toggleFollow(id)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
TweetCard.propTypes = {
  toggleFollowers: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  isFollow: PropTypes.bool.isRequired,
};
