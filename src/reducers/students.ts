import { createReducer } from '@reduxjs/toolkit';




import { getStudentsRequestFailure, getStudentsRequestSuccess } from 'actions/students';

import { StudentsState } from 'types';

export const studentsState:StudentsState = { 
    students: [],
    error: null,
}
export default {
  students: createReducer<StudentsState>(studentsState, (builder) => {
  builder
    .addCase(getStudentsRequestSuccess, (state, action) => {
     
        state.students = action.payload;
        state.error = null;
    })
    .addCase(getStudentsRequestFailure, (state, action) => {  
  
      state.error = action.payload;
      state.students = [];
    })

})};
