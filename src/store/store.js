import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../cart/CartSlice'
import authReducer from '../cart/authSlice'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,

    },
});