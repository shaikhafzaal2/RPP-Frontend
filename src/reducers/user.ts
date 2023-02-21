import { createReducer } from '@reduxjs/toolkit';


import { loginFailure, loginSuccess, logoutSuccess } from 'actions';

import { UserState } from 'types';

export const userState: UserState = {
  isLoggedIn: false,
  user: null,
  error: null,
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
    });
})};
