import css from './ClearStorageBtn.module.css';

export const ClearStorageBtn = ({ clear }) => {
  return (
    <div className={css.clearWrapper}>
      <button className={css.clearBtn} onClick={clear} type="button">
        Clear
      </button>
    </div>
  );
};
