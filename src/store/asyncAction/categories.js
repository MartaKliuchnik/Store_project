import {load_categories_action} from '../../store/reducer/categoriesReducer'

export const loadCategoriesAsync = () => {
    return async dispatch => {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories')
        const categories = await response.json();
        dispatch(load_categories_action(categories));
    }
}