import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData : {},
    isLoggedIn: false
  },
  reducers: {
    setUserLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setUserLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
    fetchUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserLoggedIn, setUserLoggedOut, fetchUserData } = userSlice.actions;

export default userSlice.reducer;
