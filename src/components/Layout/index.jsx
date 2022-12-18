import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "../Footer";
import NavMenu from "../NavMenu";
import s from './style.module.sass';

export default function Layout() {
    return (
        <div className={s.wrapper}>
            <NavMenu />
            <div className={s.content}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
