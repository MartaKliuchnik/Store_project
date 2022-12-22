const defaultState = [];

const ADD_TO_BASKET = 'ADD_TO_BASKET';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const add_to_basket_action = (payload) => ({ type: ADD_TO_BASKET, payload });
export const increment_action = (payload) => ({ type: INCREMENT, payload });
export const decrement_action = (payload) => ({ type: DECREMENT, payload });

const add_product = (state, product) => {
    const target = state.find(({ id }) => id === product.id);
    if (target === undefined) {
        return [...state, { ...product, count: 1 }]
    } else {
        target.count++;
        return [...state]
    }
}

const decrement = (state, current_id) => {
    const target = state.find(({ id }) => id === current_id);
    if (target.count > 1) {
        target.count--
        return [...state]
    } else {
        return [...state.filter(({ id }) => id !== current_id)]
    }
}

export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_BASKET) {
        return add_product(state, action.payload)
    } else if (action.type === DECREMENT){
        // const target = state.find(({ id }) => id === action.payload);
        // target.count-- 
        return decrement(state, action.payload)
    } else if (action.type === INCREMENT) {
        const target = state.find(({ id }) => id === action.payload);
        target.count++
        return [...state]
    }  else {
        return state
    }
}
