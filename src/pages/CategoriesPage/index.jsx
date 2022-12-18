import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategoriesAsync } from '../../store/asyncAction/categories';
import CategoryCard from '../../components/CategoryCard';
import s from './style.module.sass'

export default function CategoriesPage() {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(loadCategoriesAsync())
  }, []);
  

  return (
    <div className={s.categories}>
        {
          categories.map(category => <CategoryCard key={category.id} {...category}/>)
        }
    </div>
  )
}
