import classes from './LogoIcon.module.css'
import logo from '../../assets/header/logo.png'
const LogoIcon = () => {
return <div className={classes.logo}>
    <img src={logo} alt="Logo du cabinet Kim énergéticienne représentant les initiales de Kim Rémy"/>
</div>
};

export default LogoIcon;