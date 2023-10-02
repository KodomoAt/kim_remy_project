import classes from './Menu.module.css'
import menu from '../../assets/header/menu-64.png'
import {useEffect, useState} from "react";

const Menu = (props) => {


    return <nav>
        <div className={classes.menu}>
            <a  className={props.activeSection === 'accueil' ? classes.active : ''} onClick={() => props.onActiveSectionHandler('accueil')}>Accueil</a>
            <a  className={props.activeSection === 'services' ? classes.active : ''} onClick={() =>  props.onActiveSectionHandler('services')}>Services</a>
            <a className={props.activeSection === 'about' ? classes.active : ''} onClick={() =>  props.onActiveSectionHandler('about')}>À propos</a>
        </div>

    </nav>
};

export default Menu;