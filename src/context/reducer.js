export const actionType = {
    SET_USER: 'SET_USER',
    SET_PRODUCTS: 'SET_PRODUCTS',
    SET_SHOW_CART: 'SET_SHOW_CART',
    SET_CARTITEMS: 'SET_CARTITEMS'
}

const reducer = (state, action) => {

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionType.SET_SHOW_CART:
            return {
                ...state,
                showCart: action.showCart,
            };

        case actionType.SET_CARTITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            };

        case actionType.SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            };

        default:
            return state;
    }
};

export default reducer;