import LogoIcon from "./LogoIcon.jsx";
import Menu from "./Menu.jsx";
import classes from './Header.module.css'

import BookingBtn from "./BookingBtn.jsx";
import closeBtn from '../../assets/header/closeBtn.png'
import BurgerBtn from "./BurgerBtn.jsx";
import {useState} from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const clickOpenHandler = () => {
      setIsOpen(prevState => !prevState)
    }

    return <header className={classes.header}>
        <div className={classes.header__logoMenu}>
            <LogoIcon/>
            <Menu/>
        </div>

        <BookingBtn/>
        <BurgerBtn isOpen={isOpen} onClick={clickOpenHandler}/>
        <ResponsiveMenu onClick={clickOpenHandler} isOpen={isOpen}/>

    </header>
};

export default Header;