import css from './User.module.css';

export const User = ({ avatar }) => {
  return (
    <div className={css.avatarWrap}>
      <div className={css.line}>
        <div className={css.circle}>
          <img className={css.userAvatar} src={avatar} alt="User Avatar" />
        </div>
      </div>
    </div>
  );
};
