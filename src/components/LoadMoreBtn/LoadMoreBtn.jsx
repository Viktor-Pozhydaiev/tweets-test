import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={css.loadWrapper}>
      <button className={css.loadBtn} onClick={loadMore} type="button">
        Load More
      </button>
    </div>
  );
};
