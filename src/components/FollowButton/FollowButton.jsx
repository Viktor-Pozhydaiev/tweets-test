import css from './FollowButton.module.css';

export const FollowButton = ({ userId, addFollowers }) => {
  return (
    <button
      id={userId}
      className={css.followBtn}
      onClick={addFollowers}
      type="button"
      name="followBtn"
    >
      Follow
    </button>
  );
};
