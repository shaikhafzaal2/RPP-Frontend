import { all, call, put, takeEvery  } from 'redux-saga/effects';
import { ActionTypes } from 'literals';
import {  getCompanySuccess, getCompanyFailure, getCompanyRequest  } from 'actions';
import axios, {  AxiosRequestConfig, AxiosResponse } from 'axios';


export const constructUrl = (baseUrl: string, params: Record<string, any>): string => {
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


export function* deleteCompaniesSaga(data:any) {
  console.log("This is the payload in deleteCompanysaga"+ JSON.stringify( data.payload));  
  const url = ('/companys/'+data.payload);
  console.log("The constructed url is: " +url);

  const newaccessToken =  localStorage.getItem('idToken');   

  const config: AxiosRequestConfig  = {
    headers: {
      'Authorization': `Bearer ${newaccessToken}`,
      'Content-Type': 'application/json'
    }
  }
  try {    
    const response : AxiosResponse = yield call(axios.delete, url,config);
    console.log(response);
    if (response.status==200) yield put(getCompanyRequest({}));
    
  } catch (error) {
    console.log(error)
    yield put(getCompanyFailure(error))
  }
}

export function* postCompaniesSaga(data:any) {
  console.log("This is the payload in postCompanysaga"+ JSON.stringify( data.payload));  
  const url = ('/companys');
  console.log("The constructed url is: " +url);

  const newaccessToken =  localStorage.getItem('idToken');   

  const config: AxiosRequestConfig  = {
    headers: {
      'Authorization': `Bearer ${newaccessToken}`,
      'Content-Type': 'application/json'
    }
  }
  try {    
    const response : AxiosResponse = yield call(axios.post, url,data,config);
    console.log(response);
    if (response.status==200) yield put(getCompanyRequest({}));
    
  } catch (error) {
    console.log(error)
    yield put(getCompanyFailure(error))
  }
}


function* watchCompanies() {
  yield takeEvery(ActionTypes.USER_GET_COMPANY_REQUEST, companiesSaga);
}

function* watchDeleteCompanies() {
  yield takeEvery(ActionTypes.ADMIN_DELETE_COMPANY, deleteCompaniesSaga);
}
function* watchPostDeleteCompanies() {
  yield takeEvery(ActionTypes.ADMIN_POST_COMPANY, postCompaniesSaga);
}

export default function* root() {
  yield all([   
    watchCompanies(),
    watchDeleteCompanies(),
    watchPostDeleteCompanies(),   
  ]);
}
