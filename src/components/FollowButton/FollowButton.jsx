import css from './FollowButton.module.css';
import { PropTypes } from 'prop-types';

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

FollowButton.propTypes = {
  addFollowers: PropTypes.func.isRequired,
};
