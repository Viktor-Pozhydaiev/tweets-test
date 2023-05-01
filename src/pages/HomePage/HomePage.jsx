import css from '../HomePage/HomePage.module.css';
import homeImg from '../../images/homePage.png';

const HomePage = () => {
  return (
    <div>
      <h1 className={css.title}>Welcome to home page my tweets app</h1>
      <div className={css.imgWrap}>
        <img className={css.homeImg} src={homeImg} alt="Home Page" />
      </div>
    </div>
  );
};
export default HomePage;
