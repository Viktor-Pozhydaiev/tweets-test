import { Toaster } from 'react-hot-toast';
import { TweetCardList } from './TweetCardList/TweetCardList';

export const App = () => {
  return (
    <>
      <TweetCardList />

      <Toaster position="top-right" />
    </>
  );
};
