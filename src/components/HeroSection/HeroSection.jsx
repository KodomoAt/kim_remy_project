import classes from './HeroSection.module.css'
import ContactHeroSection from "./ContactHeroSection.jsx";
import DescriptionHeroSection from "./DescriptionHeroSection.jsx";
import PhotoHeroSection from "./PhotoHeroSection.jsx";

const HeroSection = () => {
    return <div className={classes.hero_section}>
        <div>
            <ContactHeroSection/>
            <DescriptionHeroSection/>
        </div>
        <div>
            <PhotoHeroSection/>
        </div>

    </div>
}

export default HeroSection;