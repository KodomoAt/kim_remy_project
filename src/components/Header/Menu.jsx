import classes from './Menu.module.css'
import menu from '../../assets/header/menu-64.png'
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Menu = (props) => {


    return <nav>
        <div className={classes.menu}>
            <NavLink to={'/'} className={({isActive}) =>
                isActive ? classes.active : undefined
            }>Accueil</NavLink>
            <NavLink to={'services'} className={({isActive}) =>
                isActive ? classes.active : undefined
            }>Services</NavLink>
            <NavLink to={'about'} className={({isActive}) =>
                isActive ? classes.active : undefined
            }>À propos</NavLink>
        </div>

    </nav>
};

export default Menu;