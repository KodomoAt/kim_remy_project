import classes from './LogoIcon.module.css'
import logo from '../../assets/header/logo.png'
import {useNavigate} from "react-router-dom";
const LogoIcon = () => {
    const navigate = useNavigate();
return <div className={classes.logo}>
    <img src={logo} alt="Logo du cabinet Kim énergéticienne représentant les initiales de Kim Rémy" onClick={() => navigate('/')}/>
</div>
};

export default LogoIcon;