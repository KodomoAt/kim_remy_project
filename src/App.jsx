import {useState, useEffect} from 'react'

import './App.css'
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Services from "./components/Services/Services.jsx";

function App() {

    const [activeSection, setActiveSection] = useState(null);



    return (
        <>
            <Header activeSection={activeSection}/>
            <HeroSection/>
            <Services/>

        </>
    )
}

export default App
