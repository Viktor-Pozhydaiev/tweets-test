import css from './FollowButton.module.css';

export const FollowButton = ({ addFollowers }) => {
  return (
    <button
      className={css.followBtn}
      onClick={addFollowers}
      type="button"
      name="followBtn"
    >
      Follow
    </button>
  );
};
