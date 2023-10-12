import Button from "../UI/Button.jsx";

const BookingBtn = (props) => {
    return <Button onClick={() => props.onActiveSectionHandler('contact')}>
        Prendre rdv
    </Button>
};
export default BookingBtn;