import React from 'react';
import s from './style.module.sass';

export default function ProductCard({images, title, price}) {
    return (
        <div className={s.card}>
            <img src={images[0]} alt={title}/>
            <div className={s.info}>
                <h2>{title}</h2>
                <p>Price: {price}</p>
                <button>Add product</button>
            </div>
        </div>
    )
}
