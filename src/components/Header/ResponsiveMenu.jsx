import classes from "./ResponsiveMenu.module.css";
import closeBtn from "../../assets/header/closeBtn.png";
import {NavLink} from "react-router-dom";


const ResponsiveMenu = (props) => {
    return <div className={`${classes['responsive-menu']} ${props.isOpen ? classes.open : ''}`}>
        <div className={classes['responsive-menu__closeBtnBox']}>
            <button className={classes['responsive-menu__closeBtn']} onClick={props.onClick}>
                <img src={closeBtn} alt=""/>
            </button>
        </div>
        <nav>
            <div>
                <NavLink to={'/'} className={({isActive}) =>
                    isActive ? classes.active : undefined
                }>Accueil</NavLink>
            </div>
            <div>
                <NavLink to={'services'} className={({isActive}) =>
                    isActive ? classes.active : undefined
                }>Services</NavLink>
            </div>
            <div>
                <NavLink to={'about'} className={({isActive}) =>
                    isActive ? classes.active : undefined
                }>À propos</NavLink>
            </div>

        </nav>
    </div>
};

export default ResponsiveMenu;