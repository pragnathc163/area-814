import { fetchCartData, fetchUser } from "../utils/fetchLocalStorageData"

const userData = fetchUser()
const cartInfo = fetchCartData()

export const initialState = {
    user: userData,
    products: null,
    showCart: false,
    cartItems: cartInfo,
};