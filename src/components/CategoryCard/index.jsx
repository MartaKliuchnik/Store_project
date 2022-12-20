import React from 'react';
import s from './style.module.sass';
import { Link } from 'react-router-dom';


export default function CategoryCard({ id, name, image }) {
    const link = `/categories/${id}`;


    return (
        <Link to={link} className={s.card} style={{backgroundImage: `url("${image}")`}}>
            <p className={s.title}>{name}</p>
        </Link>
    ) 
}
