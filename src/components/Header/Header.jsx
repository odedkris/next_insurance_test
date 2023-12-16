import logo from '../../Assets/Web 1920 – next movies/Logo2.png';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = (props) => {
  return (
    <header className='main-header' data-testid='main-header'>
      <div className='header-logo'>
        <img src={logo} alt='logo' data-testid='header-logo'/>
      </div>
      <span className='header-main' data-testid='header-main'>
        <SearchBar movies={props.movies} setResults={props.onSearchMovie}/>
      </span>
      <span className='header-right' data-testid='header-right'></span>
    </header>
  );
};

export default Header;
