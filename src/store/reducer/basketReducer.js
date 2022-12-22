const read_from_local = () => JSON.parse(localStorage.getItem('basket')) ?? [];
const write_to_local = (basket_list) => localStorage.setItem('basket', JSON.stringify(basket_list));

const defaultState = read_from_local();

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
    let new_state;
    if (action.type === ADD_TO_BASKET) {
        new_state = add_product(state, action.payload)
    } else if (action.type === DECREMENT){
        new_state = decrement(state, action.payload)
    } else if (action.type === INCREMENT) {
        const target = state.find(({ id }) => id === action.payload);
        target.count++
        new_state = [...state]
    }  else {
        return state
    }
    write_to_local(new_state)
    return new_state
}
