// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    // Define la estructura inicial de tu estado aquí
    items: [],
    consulta: "Holaa!! soy el estado consulta",
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
        console.log("cargando?")
      state.isLoading = true;
    },
    fetchDataSuccess: (state, action) => {
        console.log("listo?")
      state.items = action.payload;
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
