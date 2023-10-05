import DOMPurify from 'dompurify';
import Modal from "../UI/Modal.jsx";
import classes from "./ServiceModal.module.css";
const ServiceModal = (props) => {
    const sanitizedDescription=DOMPurify.sanitize(props.service.progress)
    //TODO: Add modal content here
    return <Modal onClick={props.onClick}>

        <div className={classes["modal-header"]}>
            <div className={classes["modal__header__img"]}>
                <img src={props.service.imgURL} alt=""/>
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