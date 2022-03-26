// Here we define all the application level states and define actions to make the changes in the state

export const initialState = {
    basket : []
}

// Calculate basket total for subtotal component
export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => amount = item.price + amount, 0));
}

export const isLogin = () => {
    return localStorage.getItem('user');
}

export const SignOut = () => {
    return localStorage.removeItem('user');
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket : [ ...state.basket, action.item ]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (item) => item.id === action.id
            );
            //console.log(index);
            if(index >= 0) {
                //delete 1 item from basket array 
                newBasket.splice(index, 1);
            } else {
                alert("Item not found in basket!");
            }
            return {
                ...state,
                basket  : newBasket
            }
        default:
            return state;
    }
}

export default reducer;