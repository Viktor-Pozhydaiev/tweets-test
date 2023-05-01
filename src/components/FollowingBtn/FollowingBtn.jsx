import css from './FollowingBtn.module.css';
import { PropTypes } from 'prop-types';

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

FollowingBtn.propTypes = {
  removeFollowers: PropTypes.func.isRequired,
};
