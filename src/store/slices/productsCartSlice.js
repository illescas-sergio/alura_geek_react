import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsToBuy : []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductsToCart: (state, action) => {
            state.productsToBuy = action.payload || initialState
        },
        deleteProductFromCart: (state, action) => {
            state.productsToBuy = state.productsToBuy.filter((el) => el.element.id !== action.payload.element.id)
        },
        sumOneOfThis: (state, action) => {
            state.productsToBuy.find(el => el.element.id === action.payload.element.id).units = action.payload
        },
        substractOneOfThis: (state, action) => {
            state.productsToBuy.find(el => el.element.id === action.payload.element.id).units = action.payload
        }, 
    },
});

export const { addProductsToCart, deleteProductFromCart, sumOneOfThis, substractOneOfThis } = cartSlice.actions;
export default cartSlice.reducer;