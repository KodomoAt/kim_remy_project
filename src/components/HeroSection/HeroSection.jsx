import classes from './HeroSection.module.css'
import ContactHeroSection from "./ContactHeroSection.jsx";
import DescriptionHeroSection from "./DescriptionHeroSection.jsx";
import PhotoHeroSection from "./PhotoHeroSection.jsx";

const HeroSection = () => {
    return <section id={'accueil'} className={classes.hero_section}>
        <div>
            <ContactHeroSection/>
            <DescriptionHeroSection/>
        </div>
        <div>
            <PhotoHeroSection/>
        </div>

    </section>
}

export default HeroSection;