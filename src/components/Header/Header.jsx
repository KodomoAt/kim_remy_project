import LogoIcon from "./LogoIcon.jsx";
import Menu from "./Menu.jsx";
import classes from './Header.module.css'

import BookingBtn from "./BookingBtn.jsx";
import closeBtn from '../../assets/header/closeBtn.png'
import BurgerBtn from "./BurgerBtn.jsx";
import {useEffect, useState} from "react";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;

                // Vérifier si la section est entièrement visible
                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const activeSectionHandler = (targetId) => {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView( {behavior: "smooth", block: "start" });
        }
    };

    const clickOpenHandler = () => {
      setIsOpen(prevState => !prevState)
    }


    return <header className={classes.header}>
        <div className={classes.header__logoMenu}>
            <LogoIcon/>
            <Menu activeSection={activeSection} onActiveSectionHandler={activeSectionHandler}/>
        </div>

        <BookingBtn onActiveSectionHandler={activeSectionHandler}/>
        <BurgerBtn isOpen={isOpen} onClick={clickOpenHandler} />
        <ResponsiveMenu onClick={clickOpenHandler} isOpen={isOpen} activeSection={activeSection} onActiveSectionHandler={activeSectionHandler}/>

    </header>
};

export default Header;