import { createReducer } from '@reduxjs/toolkit';



import { updateFilters } from 'actions/filters';

import { FilterState } from 'types';

export const filterState:FilterState = { 
 filters: {

 }
};
export default {
  filters: createReducer<FilterState>(filterState, (builder) => {
  builder
    .addCase(updateFilters, (state, action) => {
     
        state.filters = { ...state.filters, ...action.payload.payload };
    })

})};
