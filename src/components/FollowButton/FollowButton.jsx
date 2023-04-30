import css from './FollowButton.module.css';

export const FollowButton = ({ addFollowers }) => {
  return (
    <button
      id="follow"
      className={css.followBtn}
      onClick={addFollowers}
      type="button"
    >
      Follow
    </button>
  );
};
