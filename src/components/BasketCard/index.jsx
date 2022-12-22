import React from 'react';
import s from './style.module.sass';
import { useDispatch } from 'react-redux';
import {increment_action, decrement_action} from '../../store/reducer/basketReducer'

export default function BasketCard({ id, title, price, count }) {

    const dispatch = useDispatch();


    
    return (
        <div className={s.card}>
            <p>{title}</p>
            <p>{price} * {count} = {price*count}</p>
            <div className={s.btn_container}>
                <button onClick={() => dispatch(increment_action(id))}>+</button>
                <button onClick={() => dispatch(decrement_action(id))}>-</button>
            </div>
        </div>
    )
}
