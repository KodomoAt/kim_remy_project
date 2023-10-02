import classes from "./ResponsiveMenu.module.css";
import closeBtn from "../../assets/header/closeBtn.png";


const ResponsiveMenu = (props) => {
  return <div className={`${classes['responsive-menu']} ${props.isOpen ? classes.open:''}`} >
      <div className={classes['responsive-menu__closeBtnBox']}>
          <button className={classes['responsive-menu__closeBtn']} onClick={props.onClick}>
              <img src={closeBtn} alt=""/>
          </button>
      </div>
      <nav>
          <div>
              <a className={props.activeSection === 'accueil' ? classes.active : ''} onClick={() => props.onActiveSectionHandler('accueil')}>Accueil</a>
          </div>
          <div>
              <a className={props.activeSection === 'services' ? classes.active : ''} onClick={() => props.onActiveSectionHandler('services')}>Services</a>
          </div>
          <div>
              <a className={props.activeSection === 'about' ? classes.active : ''} onClick={() => props.onActiveSectionHandler('about')}>À propos</a>
          </div>


      </nav>
  </div>
};

export default ResponsiveMenu;