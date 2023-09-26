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
};

export default ResponsiveMenu;