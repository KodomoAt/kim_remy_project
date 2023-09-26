import classes from './Card.module.css'
import Badge from "./Badge.jsx";
import price from '../../assets/UI/badge_price.png'
import sablier from '../../assets/UI/badge_sablier.png'
import people from '../../assets/UI/badge_people.png'
const Card = (props) => {
    return <div className={classes.card}>

        <a href="">
            <img src="https://picsum.photos/seed/picsum/500/300" alt=""/>
        </a>

        <div>
            <Badge element={props.price} img={price} imgDescription={"Etiquette de prix"}/>
            <Badge element={props.duration} img={sablier} imgDescription={"Sablier"}/>
            <Badge element={props.people} img={people} imgDescription={"Personnage pour illustrer le public cible"}/>
        </div>

        <div className={classes["card__content"]}>
            <a href="#" className={classes['card__content__title']}>
                <h5>
                    {props.title}
                </h5>
            </a>
            <div>
                {props.shortDescription}
            </div>
        </div>
    </div>

};

export default Card;
