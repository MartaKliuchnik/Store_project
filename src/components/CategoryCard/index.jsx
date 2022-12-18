import React from 'react';
import s from './style.module.sass';

export default function CategoryCard({name, image}) {
    return (
        <div className={s.card} style={{backgroundImage: `url("${image}")`}}>
            <p className={s.title}>{name}</p>
        </div>
    ) 
}
