import React from 'react'
import { useSelector } from 'react-redux';
import s from './style.module.sass';
import BasketCard from '../../components/BasketCard'

export default function BasketPage() {
  const basket = useSelector(state => state.basket);

  const total_sum = basket.reduce((sum, { price, count }) => sum + (price * count), 0);

  return (
    <div className={s.card}>
      {
        basket.length === 0
          ? <p className={s.empty_basket}>Basket is empty</p>
          :
          <>
            {
              basket.map(product => <BasketCard key={product.id} {...product} />)
            }
            <p> Basket total cost: {total_sum}</p>
          </>
      }  
    </div>
  )
}
