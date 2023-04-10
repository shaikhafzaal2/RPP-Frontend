import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import {  getCompanySuccess, getCompanyFailure  } from 'actions';


import axios, {  AxiosResponse } from 'axios';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const constructUrl = (baseUrl: string, params: Record<string, any>): string => {
  const queryParams = Object.entries(params)
    .filter(([, value]) => value !== null && value !== undefined)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
  return `${baseUrl}?${queryParams}`;
};


export function* companiesSaga(payload:any) {
  console.log("This is the payload in companysaga"+ JSON.stringify( payload.payload));
  
  
  
  const url = constructUrl('/companys',payload.payload);
  console.log("The constructed url is: " +url);
  try {
    
   
    const response : AxiosResponse = yield call(axios.get, url,);
    console.log(response);
    if (response.status==200) yield put(getCompanySuccess(response.data));
    
  } catch (error) {
    console.log(error)
    yield put(getCompanyFailure(error))
  }
}




function* watchCompanies() {
  yield takeEvery(ActionTypes.USER_GET_COMPANY_REQUEST, companiesSaga);
}

export default function* root() {
  yield all([
    // takeLatest(ActionTypes.USER_LOGIN_REQUEST, loginSaga),
    watchCompanies(),
   
  ]);
}
