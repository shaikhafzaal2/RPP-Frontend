import { createReducer } from '@reduxjs/toolkit';


import { AdminLoginSuccess, loginFailure, loginSuccess, logoutSuccess } from 'actions';

import { UserState } from 'types';

export const userState: UserState = {
  isLoggedIn: false,
  user: null,
  error: null,
  isAdmin:false,
};
export default {
  user: createReducer<UserState>(userState, (builder) => {
  builder
    .addCase(loginSuccess, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(loginFailure, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase(logoutSuccess, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
      state.isAdmin = false;
    })    
    .addCase(AdminLoginSuccess, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
      state.isAdmin = true;
    });
})};
