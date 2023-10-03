import {useState} from 'react'

import './App.css'
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import ServiceModal from "./components/Services/ServiceModal.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ReactDOM from "react-dom";
const portalElement = document.getElementById('footer')
function App() {

    const [serviceModalIsShown, setServiceModalIsShown] = useState(false);
    const showServiceModalHandler = () => {
        setServiceModalIsShown(true);
    }
    const hideServiceModalHandler = () => {
        setServiceModalIsShown(false)
    }



    return (
        <>
            {serviceModalIsShown && <ServiceModal onClick={hideServiceModalHandler}/>}
            <Header/>
            <HeroSection/>
            <Services onShowServiceModal={showServiceModalHandler}/>
            <About/>
            {ReactDOM.createPortal(<Footer/>,portalElement)}

        </>
    )
}

export default App
