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
    <nav>
      <div>
        <img src={logo} alt='' />
      </div>
      <div>
        <input
          type='text'
          placeholder='Search for anything'
          aria-label='Search box'
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <div>
        <div>
          <a href='#/docs'>Docs</a>
        </div>
        <div>
          <NotificationsOutlineIcon />
        </div>

        <div>
          <img src={user} alt='user logo' />
          <span>Adedeji</span>
          <ArrowDropdownIcon />
          </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
