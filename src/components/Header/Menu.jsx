import classes from './Menu.module.css'
import menu from '../../assets/header/menu-64.png'
import {useEffect, useState} from "react";

const Menu = (props) => {
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

    const handleMenuClick = (targetId) => {
        const targetSection = document.getElementById(targetId);
        console.log(targetSection)
        if (targetSection) {
            targetSection.scrollIntoView( {behavior: "smooth", block: "end" });
        }
    };

    return <nav>
        <div className={classes.menu}>
            <a  className={activeSection === 'accueil' ? classes.active : ''} onClick={() => handleMenuClick('accueil')}>Accueil</a>
            <a  className={activeSection === 'services' ? classes.active : ''} onClick={() => handleMenuClick('services')}>Services</a>
            <a href={"#"}>À propos</a>
        </div>

    </nav>
};

export default Menu;