import {json, Outlet} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ReactDOM from "react-dom";
import axios from "axios";

const portalElement = document.getElementById('footer')
export const RootPage = () => {
    return <>
        <Header/>
        <Outlet/>
        {ReactDOM.createPortal(<Footer/>, portalElement)}
    </>
}

export const loader = async () => {
    // Load data from an external API
    try {

        const response = await axios.get(import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_URL);
        return await response.data

    } catch (error) {
        throw json({message: 'Impossible de charger les services', isError: true}, {status: 500});
    }
}