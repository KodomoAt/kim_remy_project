import classes from "./BurgerBtn.module.css";
import menu from "../../assets/header/menu-64.png";

const BurgerBtn = (props) => {
   return  <button className={classes['menu-burger']} onClick={props.onClick}>
        <img src={menu} alt=""/>
    </button>
};

export default BurgerBtn;