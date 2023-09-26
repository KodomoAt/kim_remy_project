import classes from './Menu.module.css'
import menu from '../../assets/header/menu-64.png'

const Menu = () => {
    return <nav>
        <div className={classes.menu}>
            <a href={"#"} className={classes.active}>Accueil</a>
            <a href={"#"}>Services</a>
            <a href={"#"}>À propos</a>
        </div>

    </nav>
};

export default Menu;