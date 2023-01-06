import { BsSearch as SearchIcon } from 'react-icons/bs';
import {
  IoMdNotificationsOutline as NotificationsOutlineIcon,
  IoMdArrowDropdown as ArrowDropdownIcon,
} from 'react-icons/io';
import logo from '../assets/lendsqr-logo.svg';
import user from '../assets/image 4.png';

const Header = () => {
  return (
    <header>
    <nav className='Topnav'>
      <div className='Logo'>
        <img src={logo} alt='' />
      </div>
      <div className='search'>
        <input className='search-input'
          type='text'
          placeholder='Search for anything'
          aria-label='Search box'
        />
        <button className='search-btn'>
          <SearchIcon  className='search-icon'/>
        </button>
      </div>
      <div className='user-info'>
        <div>
          <a href='#/docs'>Docs</a>
        </div>
        <div>
          <NotificationsOutlineIcon />
        </div>

        <div className='user-profile'>
          <img src={user} alt='user logo' />
          <h6>Adedeji</h6>
          <ArrowDropdownIcon />
          </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
