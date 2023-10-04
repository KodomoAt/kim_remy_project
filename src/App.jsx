import {useState} from 'react'

import './App.css'
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ReactDOM from "react-dom";
const portalElement = document.getElementById('footer')
function App() {





    return (
        <>

            <Header/>
            <HeroSection/>
            <Services />
            <About/>
            {ReactDOM.createPortal(<Footer/>,portalElement)}

        </>
    )
}

export default App
