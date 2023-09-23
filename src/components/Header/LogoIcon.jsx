import classes from './LogoIcon.module.css'
import logo from '../../assets/header/logo.svg'
const LogoIcon = () => {
return <div className={classes.logo}>
    <img src={logo} alt="test"/>
</div>
};

export default LogoIcon;