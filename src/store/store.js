import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from './slices/fetchDataSlice.js';
import productsReducer from './slices/productsSlice.js';
import userReducer from './slices/userSlice.js';

export default configureStore({
  reducer: {
    data: fetchDataReducer,
    products: productsReducer,
    user: userReducer,
  }
});
