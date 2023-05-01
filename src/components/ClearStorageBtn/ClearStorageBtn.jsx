import css from './ClearStorageBtn.module.css';
import { PropTypes } from 'prop-types';

export const ClearStorageBtn = ({ clear }) => {
  return (
    <div className={css.clearWrapper}>
      <button className={css.clearBtn} onClick={clear} type="button">
        Clear
      </button>
    </div>
  );
};

ClearStorageBtn.propTypes = {
  clear: PropTypes.func.isRequired,
};
