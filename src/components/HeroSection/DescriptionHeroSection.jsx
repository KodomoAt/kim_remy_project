import classes from './DescriptionHeroSection.module.css'
const DescriptionHeroSection = () => {
    return <div className={classes['hero_section']}>
        <div className={classes['hero_section__title']}>
            <h1>
                Je suis <span>Kim Rémy !</span>
            </h1>
            <h1>
                Énergéticien certifiée.
            </h1>
        </div>
        <div className={classes['hero_section__description']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui
            mattis dui, non pulvinar lorem felis nec erat
        </div>

    </div>
};

export default DescriptionHeroSection;