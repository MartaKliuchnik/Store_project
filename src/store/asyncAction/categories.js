import { load_categories_action } from '../../store/reducer/categoriesReducer';
import { load_products_action } from '../reducer/productByCategoryReducer'

export const loadCategoriesAsync = () => {
    return async dispatch => {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories')
        const categories = await response.json();
        dispatch(load_categories_action(categories));
    }
}

export const loadProductsByCategoryAsync = (id) => {
    return async dispatch => {
        const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
        const products = await response.json();
        dispatch(load_products_action(products))
    }
}