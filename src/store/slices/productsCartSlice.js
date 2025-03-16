import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsToBuy : []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.productsToBuy = action.payload || initialState
        },
        deleteProductFromCart: (state, action) => {
            state.productsToBuy = state.productsToBuy.filter((el) => el.id !== action.payload)
        },
        modifyProductQuantity: (state, action) => {           
            state.productsToBuy.find(el => el.id === action.payload.id).quantity = action.payload
        } 
    },
});

export const { addProductToCart, deleteProductFromCart, modifyProductQuantity} = cartSlice.actions;
export default cartSlice.reducer;