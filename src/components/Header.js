import '../styles/layout/header.scss';
import headerImg from '../images/RickandMortytwo.jpg';
//import Filter from './Filter';
const Header = () => {
  return (
    <section className='header'>
      <img className='header__img' src={headerImg} alt='Rick and Morty' />
    </section>
  );
};

export default Header;
