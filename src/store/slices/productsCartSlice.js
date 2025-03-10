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
            // const quantityAdjustment = 1;
            // const currentQuantity = state.productsToBuy.find(el => el.id === action.payload.element).quantity;
            // if(action.payload.operation === "+"){                
            //     const updatedQuantity = currentQuantity + quantityAdjustment;
            //     fetchAdjustProductQuantity(action.payload.element, updatedQuantity)
            //     .then(resp => {
            //         if(resp.ok){
            //             fetchGetCartItems()
            //             .then(resp => resp.json())
            //             .then(data => {
            //                 console.log(data)
            //             })
            //         }
            //     })
            //     .catch(err => {
            //         throw new Error(err.message)
            //     })
                
            // }
            // if(action.payload.operation === "-"){
            //     console.log(`Restar ${quantityAdjustment} al elemento ${action.payload.element}`);

            //     const updatedQuantity = currentQuantity - quantityAdjustment;

            //     fetchAdjustProductQuantity(action.payload.element, updatedQuantity)
            //     .then(resp => console.log(resp))
            // }

            //state.productsToBuy.find(el => el.id === action.payload.element).quantity = 123
           
            state.productsToBuy.find(el => el.id === action.payload.id).quantity = action.payload
        } 
    },
});

export const { addProductToCart, deleteProductFromCart, modifyProductQuantity} = cartSlice.actions;
export default cartSlice.reducer;