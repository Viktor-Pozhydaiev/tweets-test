import css from './TweetCard.module.css';
import Logo from '../../images/Vector.svg';
import { FollowButton } from '../FollowButton/FollowButton';
import { User } from 'components/User/User';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { FollowingBtn } from 'components/FollowingBtn/FollowingBtn';

export const TweetCard = ({ id, tweets, followers, avatar }) => {
  const [addFollowing, setAddFollowing] = useState(followers);

  const toggleFollowers = evt => {
    const btnName = evt.target.name;
    const currentId = evt.target.id;
    if (id === currentId && btnName === 'followBtn') {
      setAddFollowing(prevState => prevState + 1);
      toast.success('Congratulation your following is successful =)');
    } else if (id === currentId && btnName === 'followingBtn') {
      setAddFollowing(followers);
      toast.success('Congratulation your unsubscribe was successful =)');
    } else {
      toast.error('Button name oder userID is wrong.');
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
              {addFollowing.toLocaleString('en-US')}
              <span className={css.followersText}>followers</span>
            </p>
          </div>

          <div className={css.btnWrapper}>
            {addFollowing !== followers ? (
              <FollowingBtn userId={id} removeFollowers={toggleFollowers} />
            ) : (
              <FollowButton userId={id} addFollowers={toggleFollowers} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
