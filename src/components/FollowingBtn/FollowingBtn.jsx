import css from './FollowingBtn.module.css';

export const FollowingBtn = ({ userId, removeFollowers }) => {
  return (
    <button
      id={userId}
      onClick={removeFollowers}
      className={css.followingBtn}
      type="button"
      name="followingBtn"
    >
      Following
    </button>
  );
};
