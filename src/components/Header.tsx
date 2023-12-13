import logo from '../Assets/Web 1920 – next movies/Logo2.png';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header id='main-header'>
      <div id='header-logo'>
        <img src={logo} alt='logo' />
      </div>
      <span id='header-main'>
        <SearchBar />
      </span>
      <span id='header-right'></span>
    </header>
  );
};

export default Header;
