import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from './slices/fetchDataSlice.js';
import productsReducer from './slices/productsSlice.js';
import userReducer from './slices/userSlice.js';
import cartReducer from './slices/productsCartSlice.js';

export default configureStore({
  reducer: {
    data: fetchDataReducer,
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
  }
});
