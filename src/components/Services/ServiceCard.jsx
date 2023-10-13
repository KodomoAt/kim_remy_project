import classes from "./ServiceCard.module.css";
import Badge from "../UI/Badge.jsx";
import price from "../../assets/UI/badge_price.png";
import sablier from "../../assets/UI/badge_sablier.png";
import people from "../../assets/UI/badge_people.png";
import Button from "../UI/Button.jsx";
import {Link, useNavigate} from "react-router-dom";

const ServiceCard = (props) => {
    const navigate = useNavigate();
    return <div className={classes.card}>

        {/*<a onClick={()=>props.onShowServiceModal(props.id)}>*/}
        <Link to={'/services/' + props.id}>
            <img src={props.imgURL} alt={props.imgDescription}/>
        </Link>

        <div>
            <Badge element={props.price} img={price} imgDescription={"Etiquette de prix"}/>
            <Badge element={props.duration} img={sablier} imgDescription={"Sablier"}/>
            <Badge element={props.people} img={people} imgDescription={"Personnage pour illustrer le public cible"}/>
        </div>

        <div className={classes["card__content"]}>
            <Link to={'/services/' + props.id} className={classes['card__content__title']}>
                <h4>
                    {props.title}
                </h4>
            </Link>
            <div>
                {props.shortDescription}
            </div>

        </div>
        <div className={classes["card__footer"]}>


        <Button onClick={() => navigate('/services/' + props.id + '/')}>En savoir +</Button>
        </div>
    </div>
}
export default ServiceCard;