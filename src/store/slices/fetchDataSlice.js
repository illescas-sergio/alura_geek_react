// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'fetchData',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
        console.log("cargando?")
      state.isLoading = true;
    },
    fetchDataSuccess: (state) => {
        console.log("listo?")
      state.isLoading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
        console.log("fallé?")
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;
