import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsByCategoryAsync } from '../../store/asyncAction/categories';

export default function CategoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(loadProductsByCategoryAsync(id))
    }, [])

  return (
    <div>
      {
        products.map(product => <p key={product.id}>{product.title}</p>)
      }
    </div>
  )
}
