import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsToBuy : [{
        category: "Star Wars",
        id:"92190c64-04f4-4ea9-966e-2e25dedaf41a",
        price:60.10,
        product_description:"Un producto de Star Wars",
        product_image:"http://localhost:8000/media/productos/unsplash_6FDXGY9J6y4_HLWYiWF.png",
        product_name:"Producto XYZ",
        product_owner:"sergio",
        product_quantity: 1},
    ]
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