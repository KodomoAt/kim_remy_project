import Header from "../components/Header/Header.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Services from "../components/Services/Services.jsx";
import About from "../components/About/About.jsx";
import ReactDOM from "react-dom";
import Footer from "../components/Footer/Footer.jsx";
import {Contact} from "../components/Contact/Contact.jsx";
import {json, useRouteLoaderData} from "react-router-dom";
import axios from "axios";

export const HomePage = () => {
const services = useRouteLoaderData('root')
    console.log(services)
  return <>

      <HeroSection/>
      <Services services={services}/>
      <About/>

      <Contact/>
  </>
}

