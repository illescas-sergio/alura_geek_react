import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    selectedCategory: []
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload || initialState
        },
        filterProducts: (state, action) => {
            state.products = state.products.filter(el => el.category === action.payload)
        },
        setCategory: (state, action) => {
            state.selectedCategory = action.payload || initialState
        }
    },
});

export const { setProducts, filterProducts, setCategory } = productsSlice.actions;
export default productsSlice.reducer;