import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';




import axios, {  AxiosRequestConfig, AxiosResponse } from 'axios';
import { getStudentsRequest, getStudentsRequestFailure, getStudentsRequestSuccess } from 'actions/students';
import { constructUrl } from './company';





export function* StudentsSaga(data:any) {  
  
  const url =  constructUrl('/users',data.payload);
  
  try {    
   
    const response : AxiosResponse = yield call(axios.get, url,);
    console.log(response);
    if (response.status==200) yield put(getStudentsRequestSuccess(response.data));
    
  } catch (error) {
    console.log(error)
    yield put(getStudentsRequestFailure(error))
  }
}


export function* RemoveStudentSaga(data:any) {
    console.log("This is the payload in deleteCompanysaga"+ JSON.stringify( data.payload));  
    try {
     
    const newaccessToken =  localStorage.getItem('idToken');   
  
    const config: AxiosRequestConfig  = {
      headers: {
        'Authorization': `Bearer ${newaccessToken}`,
        'Content-Type': 'application/json'
      }
    }
    
      const updateData = {
        homeAccountId: data.payload.homeAccountId,
        eligible:data.payload.eligible,     
      }
      
      console.log(data);
      const response : AxiosResponse = yield call(axios.post, '/users/register', updateData,config);
      console.log(response);
      if (response.status==200)yield put(getStudentsRequest({}));        
      
    } catch (error) {
      console.log(error)
      yield put(getStudentsRequestFailure(error))
    }
  }



function* watchStudents() {
  yield takeEvery(ActionTypes.GET_STUDENT_REQUEST, StudentsSaga);
}
function* watchRemoveStudents() {
    yield takeEvery(ActionTypes.ADMIN_REMOVE_STUDENT, RemoveStudentSaga);
  }

export default function* root() {
  yield all([    
    watchStudents(),
    watchRemoveStudents(),    
  ]);
}
