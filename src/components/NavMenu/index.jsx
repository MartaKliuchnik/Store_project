import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.sass';

export default function NavMenu() {

    const classFunk = ({isActive}) => isActive ? s.active : '';
    return (
        <nav className={s.nav_menu}>
            <NavLink className={classFunk} to='/'>Categories</NavLink>
            <NavLink className={classFunk} to='/basket'>Basket</NavLink>
        </nav>
    )
}
