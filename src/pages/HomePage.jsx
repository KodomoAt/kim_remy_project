import Header from "../components/Header/Header.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Services from "../components/Services/Services.jsx";
import About from "../components/About/About.jsx";
import ReactDOM from "react-dom";
import Footer from "../components/Footer/Footer.jsx";
import {Contact} from "../components/Contact/Contact.jsx";

export const HomePage = () => {
  return <>

      <HeroSection/>
      <Services />
      <About/>

      <Contact/>
  </>
}