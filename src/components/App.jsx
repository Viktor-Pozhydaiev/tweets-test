import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('../pages/TweetsPage/TweetsPage'));
const Header = lazy(() => import('../components/Header/Header'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
