import { Link, Outlet } from 'react-router-dom';
import css from '../Header/Header.module.css';
import { Suspense } from 'react';

const Header = () => {
  return (
    <div>
      <nav className={css.navWrapper}>
        <Link className={css.navStyle} to="/">
          <p className={css.navText}>Home</p>
        </Link>
        <Link className={css.navStyle} to="tweets">
          <p className={css.navText}>Tweets</p>
        </Link>
      </nav>
      <Suspense fallback={<div>LOADING COMPONENTS...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
