import { createReducer } from '@reduxjs/toolkit';


import {  } from 'actions';
import { getCompanyFailure,getCompanySuccess } from 'actions/company';

import { CompaniesState } from 'types';

export const companyState:CompaniesState = { 
  companies: [],
  error: null,
};
export default {
  company: createReducer<CompaniesState>(companyState, (builder) => {
  builder
    .addCase(getCompanySuccess, (state, action) => {
     
      state.companies = action.payload;
      state.error = null;
    })
    .addCase(getCompanyFailure, (state, action) => {
      
      state.companies = [];
      state.error = action.payload;
    }) 
})};
