import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ReactDOM from "react-dom";

const portalElement = document.getElementById('footer')
export const RootPage = () => {
    return <>
        <Header/>
        <Outlet/>
        {ReactDOM.createPortal(<Footer/>, portalElement)}
    </>
}