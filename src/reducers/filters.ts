import { createReducer } from '@reduxjs/toolkit';



import { getFiltersRequestSuccess, updateFilters } from 'actions/filters';

import { FilterState } from 'types';

export const filterState:FilterState = { 
 filters: {

 },
 infoFilters:{
  
    faculties:[],
    departments:[],
    companyTypes:[],
    degrees:[],
  
 }
};
export default {
  filters: createReducer<FilterState>(filterState, (builder) => {
  builder
    .addCase(updateFilters, (state, action) => {
     
        state.filters = { ...state.filters, ...action.payload.payload };
    })
    .addCase(getFiltersRequestSuccess, (state, action) => {  
  
      state.infoFilters = action.payload
    })

})};
