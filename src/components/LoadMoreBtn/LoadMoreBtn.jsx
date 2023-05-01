import css from './LoadMoreBtn.module.css';
import { PropTypes } from 'prop-types';

export const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={css.loadWrapper}>
      <button className={css.loadBtn} onClick={loadMore} type="button">
        Load More
      </button>
    </div>
  );
};
LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
