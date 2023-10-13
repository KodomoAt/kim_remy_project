import Button from "../UI/Button.jsx";
import {useNavigate} from "react-router-dom";

const BookingBtn = (props) => {
    const navigate = useNavigate();
    return <Button onClick={() => navigate('/contact')}>
        Prendre rdv
    </Button>
};
export default BookingBtn;