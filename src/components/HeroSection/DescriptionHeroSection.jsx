import classes from './DescriptionHeroSection.module.css'
import Button from "../UI/Button.jsx";

const DescriptionHeroSection = () => {
    return <>
        <div className={classes['hero_section']}>
            <div className={classes['hero_section__title']}>
                <h1>
                    Je suis <span>Kim Rémy !</span>
                </h1>
                <h1>
                    Énergéticien magnétiseuse <span>depuis 2018</span>.
                </h1>
            </div>
            <div className={classes['hero_section__description']}>
                Je vous propose de mettre en lumière vos ressources intérieures, en vous aidant à libérer votre énergie
                vitale et à réaliser votre plein potentiel dans tous les aspects de votre vie.
            </div>


        </div>
        <div className={classes['hero_section__button']}>
            <Button>En savoir plus</Button>
        </div>
    </>

};

export default DescriptionHeroSection;