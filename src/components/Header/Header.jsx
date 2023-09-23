import LogoIcon from "./LogoIcon.jsx";
import Menu from "./Menu.jsx";
import classes from './Header.module.css'

import BookingBtn from "./BookingBtn.jsx";

const Header = () => {
  return <header className={classes.header}>
    <div className={classes.header__logoMenu}>
      <LogoIcon/>
      <Menu/>
    </div>

    <BookingBtn/>

  </header>
};

export default Header;