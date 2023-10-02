import classes from './About.module.css';
import React from "react";
const About = () => {
return <section className={classes.about}>

    <div className={classes['about__title']}>
        <div className={classes['about__title__trait']}></div>
        <h2>À propos</h2>
        <div className={classes['about__title__trait']}></div>
    </div>

</section>
};

export default About;