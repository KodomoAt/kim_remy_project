import classes from "./Footer.module.css";
import facebook from "../../assets/footer/facebook_icon.svg";
import instagram from "../../assets/footer/instagram_icon.svg";
const Footer = () => {

  return <footer>
      <div className={classes.footer}>
          <div className={classes.row}>
              <a href="#"><i className="fa fa-facebook"><img src={facebook} alt=""/></i></a>
              <a href="#"><i className="fa fa-instagram"><img src={instagram} alt=""/></i></a>

          </div>

          <div className={classes.row}>
              <ul>
                  <li><a href="#">Accueil</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">À propos</a></li>
              </ul>
          </div>

          <div className={classes.row}>
              <a href="">Designed By: Staub Dév</a>
          </div>
      </div>
  </footer>
};

export default Footer