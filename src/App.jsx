import {useState, useEffect} from 'react'

import './App.css'
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import ServiceModal from "./components/Services/ServiceModal.jsx";

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

        </>
    )
}

export default App
