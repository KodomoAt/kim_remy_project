import classes from "./ResponsiveMenu.module.css";
import closeBtn from "../../assets/header/closeBtn.png";
import {useEffect, useState} from "react";

const ResponsiveMenu = (props) => {
    //TODO: Refactor this code because in double with menu
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
        if (targetSection) {
            targetSection.scrollIntoView( {behavior: "smooth", block: "start" });
        }
    };
  return <div className={`${classes['responsive-menu']} ${props.isOpen ? classes.open:''}`} >
      <div className={classes['responsive-menu__closeBtnBox']}>
          <button className={classes['responsive-menu__closeBtn']} onClick={props.onClick}>
              <img src={closeBtn} alt=""/>
          </button>
      </div>
      <nav>
          <div>
              <a className={activeSection === 'accueil' ? classes.active : ''} onClick={() => handleMenuClick('accueil')}>Accueil</a>
          </div>
          <div>
              <a className={activeSection === 'services' ? classes.active : ''} onClick={() => handleMenuClick('services')}>Services</a>
          </div>
          <div>
              <a href="">À propos</a>
          </div>


      </nav>
  </div>
};

export default ResponsiveMenu;