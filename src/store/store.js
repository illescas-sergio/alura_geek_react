import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice.js';

export default configureStore({
  reducer: {
    data: dataReducer,
  }
});
