import { createSlice } from "@reduxjs/toolkit";

const productsState = {
    name: "",
    price: "",
    description: ""
}

const productsSlice = createSlice({
    name: "products",
    productsState,
    reducers: {
        addProduct: (state, action) => {
            const { name, price, description} = action.payload;
            state.name = name;
            state.price = price;
            state.description = description;
        },
    }
});

export const {addProduct} = productsSlice.actions;
export default productsSlice.reducer;