import css from './FollowingBtn.module.css';

export const FollowingBtn = ({ removeFollowers }) => {
  return (
    <button
      onClick={removeFollowers}
      className={css.followingBtn}
      type="button"
    >
      Following
    </button>
  );
};
