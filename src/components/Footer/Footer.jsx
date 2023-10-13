import classes from "./Footer.module.css";
import facebook from "../../assets/footer/facebook_icon.svg";
import instagram from "../../assets/footer/instagram_icon.svg";
import {NavLink} from "react-router-dom";

const Footer = () => {

    return <footer>
        <div className={classes.footer}>
            <div className={classes.row}>
                <a href="https://www.facebook.com/kimremyenergie" rel={'noopener'} target={'_blank'}><i
                    className="fa fa-facebook"><img src={facebook} alt=""/></i></a>
                <a href="https://www.instagram.com/kim.remy.energie/" rel={'noopener'} target={"_blank"}><i
                    className="fa fa-instagram"><img src={instagram} alt=""/></i></a>

            </div>


            <div className={classes.row}>
                <ul>
                    <li><NavLink to={'/'}>Accueil</NavLink></li>
                    <li><NavLink to={'services'}>Services</NavLink></li>
                    <li><NavLink to={'about'}>À propos</NavLink></li>
                </ul>
            </div>

            <div className={classes.row}>
                <a href="">Designed By: Staub Dév</a>
            </div>
        </div>
    </footer>
};

export default Footer