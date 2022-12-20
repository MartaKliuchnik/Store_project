import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsByCategoryAsync } from '../../store/asyncAction/categories';
import ProductCard from '../../components/ProductCard';
import s from './style.module.sass'

export default function CategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(loadProductsByCategoryAsync(id))
    }, [])

  return (
    <div className={s.product_container}>
      {
        products.map(product => <ProductCard key={product.id} {...product} />)
      }
    </div>
  )
}
