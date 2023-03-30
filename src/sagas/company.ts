import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import {  getCompanySuccess, getCompanyFailure  } from 'actions';


import axios, {  AxiosResponse } from 'axios';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';



export function* companiesSaga() {
  
  try {
   
    const response : AxiosResponse = yield call(axios.get, '/companys',);
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
