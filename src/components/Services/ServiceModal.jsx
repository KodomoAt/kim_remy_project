import DOMPurify from 'dompurify';
import Modal from "../UI/Modal.jsx";
import classes from "./ServiceModal.module.css";
import Badge from "../UI/Badge.jsx";
import price from "../../assets/UI/badge_price.png";
import sablier from "../../assets/UI/badge_sablier.png";
import people from "../../assets/UI/badge_people.png";

const ServiceModal = (props) => {
    const sanitizedDescription = DOMPurify.sanitize(props.service.progress)
    //TODO: Add modal content here
    return <Modal onClick={props.onClick}>

        <div className={classes["modal-header"]}>
            <div className={classes["modal__header__img"]}>
                <img src={props.service.imgURL} alt=""/>
            </div>

            <div>
                <Badge element={props.service.price} img={price} imgDescription={"Etiquette de prix"}/>
                <Badge element={props.service.duration} img={sablier} imgDescription={"Sablier"}/>
                <Badge element={props.service.people} img={people}
                       imgDescription={"Personnage pour illustrer le public cible"}/>
            </div>

            <h2>{props.service.title}</h2>
            <button onClick={props.onClick} className={classes["close-button"]}>×</button>
        </div>
        <div className={classes["modal-body"]}>
            <p dangerouslySetInnerHTML={{__html: sanitizedDescription}}></p>
        </div>


    </Modal>
};

export default ServiceModal;