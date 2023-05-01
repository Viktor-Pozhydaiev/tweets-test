import css from './TweetCard.module.css';
import Logo from '../../images/Vector.svg';
import { FollowButton } from '../FollowButton/FollowButton';
import { User } from 'components/User/User';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { FollowingBtn } from 'components/FollowingBtn/FollowingBtn';

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
    } else {
      toggleFollowers(id, false, 'minus');
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
            {isFollow === true ? (
              <FollowingBtn userId={id} removeFollowers={toggleFollow} />
            ) : (
              <FollowButton userId={id} addFollowers={toggleFollow} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
