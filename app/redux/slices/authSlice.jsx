'use client'

import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    name: '',
    email: '',
    token: '',
  },
  reducers: {
    signUp: (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.name = '';
      state.email = '';
      state.token = '';
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;

export default authSlice.reducer;




