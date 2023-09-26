import LogoIcon from "./LogoIcon.jsx";
import Menu from "./Menu.jsx";
import classes from './Header.module.css'

import BookingBtn from "./BookingBtn.jsx";
import closeBtn from '../../assets/header/closeBtn.png'
import BurgerBtn from "./BurgerBtn.jsx";
import {useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const clickOpenHandler = () => {
      setIsOpen(prevState => !prevState)
    }
    const responsiveMenu = <div className={`${classes['responsive-menu']} ${isOpen ? classes.open:''}`} >
        <div className={classes['responsive-menu__closeBtnBox']}>
            <button className={classes['responsive-menu__closeBtn']} onClick={clickOpenHandler}>
                <img src={closeBtn} alt=""/>
            </button>
        </div>
        <nav>
            <div>
                <a href="" className={classes.active}>Accueil</a>
            </div>
            <div>
                <a href="">Services</a>
            </div>
            <div>
                <a href="">À propos</a>
            </div>


        </nav>
    </div>
    return <header className={classes.header}>
        <div className={classes.header__logoMenu}>
            <LogoIcon/>
            <Menu/>
        </div>

        <BookingBtn/>
        <BurgerBtn isOpen={isOpen} onClick={clickOpenHandler}/>
        {responsiveMenu}

    </header>
};

export default Header;