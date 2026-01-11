import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            // replace current cart with data from server
            state.cartItems = action.payload;
        },
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existing = state.cartItems.find((i) => i.id === newItem.id);
            if (existing) {
                existing.quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
        },
        setCartItems: (state, action) => {
            state.cartItems = action.payload;
          },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find(i => i.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
          },
    },
});

export const { setCart, addToCart,setCartItems, removeFromCart, increaseQuantity, decreaseQuantity, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
