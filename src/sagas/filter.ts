import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import { getCompanyFailure, getFiltersRequestSuccess } from 'actions';


import axios, {  AxiosResponse } from 'axios';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';




export function* filtersSaga() {

  
  
  
  const url = ('/filters');
  console.log("The constructed url is: " +url);
  try {
    
   
    const response : AxiosResponse = yield call(axios.get, url,);
    console.log(response);
    if (response.status==200) yield put(getFiltersRequestSuccess(response.data));
    
  } catch (error) {
    console.log(error)
    yield put(getCompanyFailure(error))
  }
}




function* watchFilters() {
  yield takeEvery(ActionTypes.GET_FILTER_REQUEST, filtersSaga);
}

export default function* root() {
  yield all([
    // takeLatest(ActionTypes.USER_LOGIN_REQUEST, loginSaga),
    watchFilters(),
   
  ]);
}
