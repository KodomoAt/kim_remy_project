import Modal from "../UI/Modal.jsx";

const ServiceModal = (props) => {

    //TODO: Add modal content here
    return <Modal onClick={props.onClick}>

        <h1>{props.service.title}</h1>
    </Modal>
};

export default ServiceModal;