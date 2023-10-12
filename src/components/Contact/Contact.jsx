import classes from './Contact.module.css'
import {ContactInfos} from "./ContactInfos.jsx";
import {ContactForm} from "./ContactForm.jsx";
import React from "react";

export const Contact = () => {
    return <section id={"contact"}>
        <div className={classes['contact__title']}>
            <div className={classes['contact__title__trait']}></div>
            <h2>Contact</h2>
            <div className={classes['contact__title__trait']}></div>
        </div>
        <div className={classes.contact}>
            <ContactInfos/>
            <ContactForm/>

        </div>
    </section>
}