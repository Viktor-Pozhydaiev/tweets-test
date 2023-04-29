import css from "./FollowingBtn.module.css";

export const FollowingBtn = ({ addFollowers }) => {
  return (
    <div>
      <button
        id="following"
        onClick={addFollowers}
        className={css.followingBtn}
        type="button"
      >
        Following
      </button>
    </div>
  );
};
