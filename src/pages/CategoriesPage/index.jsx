import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategoriesAsync } from '../../store/asyncAction/categories';

export default function CategoriesPage() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(loadCategoriesAsync())
  }, [])
  

  return (
    <div>{
      categories.map(category => <p key={category.id}>{category.name}</p>)
    }</div>
  )
}
