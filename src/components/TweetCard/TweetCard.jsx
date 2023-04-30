import css from './TweetCard.module.css';
import Logo from '../../images/Vector.svg';
import { FollowButton } from '../FollowButton/FollowButton';
import { User } from 'components/User/User';

export const TweetCard = ({
  id,
  tweets,
  user,
  followers,
  avatar,
  addFollowers,
}) => {
  return (
    <div className={css.card}>
      <a href="https://goit.global/ua/">
        <img className={css.imageLogo} src={Logo} alt="Logo" />
      </a>
      <li id={id}>
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
            <FollowButton addFollowers={addFollowers} />
          </div>
        </div>
      </li>
    </div>
  );
};
