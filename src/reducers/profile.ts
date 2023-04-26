import { createReducer } from '@reduxjs/toolkit';


import { logoutSuccess } from 'actions';
import { getProfileFailure,getProfileSuccess, uploadProfileFailure, uploadProfileRequest, uploadProfileSuccess } from 'actions/profile';

import { ProfilesState } from 'types';

export const profileState:ProfilesState = { 
  loading:false,
  profiles: [],
  error: null,
};
export default {
  profile: createReducer<ProfilesState>(profileState, (builder) => {
  builder
    .addCase(getProfileSuccess, (state, action) => {
     
      state.profiles = action.payload;
      state.error = null;
    })
    .addCase(getProfileFailure, (state, action) => {
      
      state.profiles = [];
      state.error = action.payload;
    }) 
    .addCase(uploadProfileRequest, (state) => {
      state.loading = true;
      state.error = null; 
    })
    .addCase(uploadProfileSuccess, (state, _action) => {
      state.loading = false;      
    })
    .addCase(uploadProfileFailure, (state, action) => {
      state.loading = false;  
      state.error =  action.payload;   
    })
    .addCase(logoutSuccess, (state, _action) => {
      state.loading = false;  
      state.error =  null;
      state.profiles = [];
    })
})};
