import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : [],
    selectedCategory: [],
    detail: [],
    usersProducts: []
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
        },
        setDetail: (state, action) => {
            state.detail = action.payload || initialState
        },
        setUsersProducts: (state, action) => {
            state.usersProducts = action.payload || initialState
        }
    },
});

export const { setProducts, filterProducts, setCategory, setDetail, setUsersProducts } = productsSlice.actions;
export default productsSlice.reducer;