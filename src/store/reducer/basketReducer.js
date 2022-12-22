const defaultState = [];

const ADD_TO_BASKET = 'ADD_TO_BASKET';

export const add_to_basket_action = (payload) => ({ type: ADD_TO_BASKET, payload });

const add_product = (state, product) => {
    const target = state.find(({id}) => id === product.id);
    if (target === undefined) {
        return [...state, {...product, count: 1}]
    } else {
        target.count++;
        return [...state]
    }
}

export const basketReducer = (state = defaultState, action) => {
    if (action.type === 'ADD_TO_BASKET') {
        return add_product(state, action.payload)
    } else {
        return state
    }
}
