import React from 'react'
import { useSelector } from 'react-redux';
import s from './style.module.sass';

export default function BasketPage() {
  const basket = useSelector(state => state.basket);

  return (
    <div className={s.card}>
      {
        basket.map(product => <p key={product.id}>{product.title} {product.price} {product.count}</p>)
      }  
    </div>
  )
}
