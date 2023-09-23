import classes from './Menu.module.css'
const Menu = () => {
return <div className={classes.menu}>
    <a href={"#"} className={classes.active}>Accueil</a>
    <a href={"#"}>Services</a>
    <a href={"#"}>À propos</a>
</div>
};

export default Menu;