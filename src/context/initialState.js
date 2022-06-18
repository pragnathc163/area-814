import { fetchUser } from "../utils/fetchLocalStorageData"

const userData = fetchUser()

export const initialState = {
    user: userData, 
};