import React from 'react';
import s from './style.module.sass';
import { useDispatch } from 'react-redux';
import {add_to_basket_action} from '../../store/reducer/basketReducer'

export default function ProductCard({ id, images, title, price }) {
    
    const dispatch = useDispatch();

    return (
        <div className={s.card}>
            <img src={images[0]} alt={title}/>
            <div className={s.info}>
                <h2>{title}</h2>
                <p>Price: {price}</p>
                <button
                    onClick={() => dispatch(add_to_basket_action({id, title, price}))}>
                    Add product
                </button>
            </div>
        </div>
    )
}
