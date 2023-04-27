import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import { getFiltersRequest, getProfileRequest, loginFailure,  loginSuccess,  logoutSuccess } from 'actions';
import { AccountInfo, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from 'authConfig';
import axios, { AxiosResponse } from 'axios';
import { AuthResult } from 'types';

// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


const msalInstance = new PublicClientApplication (msalConfig);
axios.defaults.baseURL = location.hostname === "localhost"?'http://localhost:3001':'https://rppmainbackend.azurewebsites.net/';

export function* loginSaga() {
  
  try {
    let myAccount: AccountInfo;
    myAccount = yield call([msalInstance,msalInstance.loginPopup]);
    
  
   
    console.log(myAccount);

 
    const tokenRequest = {
      scopes: [],
      requested_expiry: 4200 // 2 hours
    };

    msalInstance.setActiveAccount(myAccount);

    const res :AuthResult = yield call([msalInstance, msalInstance.acquireTokenSilent], tokenRequest);
    const newaccessToken = res.idToken;
console.log('NewTokenData:'+ newaccessToken);
localStorage.setItem('idToken', newaccessToken?newaccessToken:'');

console.log("localStorage token: "+localStorage.getItem('idToken'));

    // const config: AxiosRequestConfig  = {
    //   headers: {
    //     'Authorization': `Bearer ${newaccessToken}`,
    //     'Content-Type': 'application/json'
    //   }
    // }

    axios.defaults.headers.common['Authorization'] =  `Bearer ${newaccessToken}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';



    const data = {
      homeAccountId: (myAccount as any).account.homeAccountId,
      name:(myAccount as any).account.name,
      email: (myAccount as any).account.username,
      admin:false
    }
    console.log(data);
    const response : AxiosResponse = yield call(axios.post, '/users/register', data);
    console.log(response);
    if (response.status==200) 
    yield put(loginSuccess(myAccount)),    
    yield put (getFiltersRequest()),
    yield put(getProfileRequest('bb90520a-9de3-43ac-b645-7091022a7661.e038180b-0021-401f-83a9-a2d45acee0dc'))
    
  } catch (error) {
    console.log(error)
    yield put(loginFailure(error))
  }
}


export function* logoutSaga() {
  
  try {
    yield call([msalInstance,msalInstance.logoutPopup]);
    yield put(logoutSuccess());
    
  } catch (error) {
    console.log(error)
   
  }
 
}

function* watchLogout() {
  yield takeEvery(ActionTypes.USER_LOGOUT_REQUEST, logoutSaga);
}


function* watchLogin() {
  yield takeEvery(ActionTypes.USER_LOGIN_REQUEST, loginSaga);
}

export default function* root() {
  yield all([
    // takeLatest(ActionTypes.USER_LOGIN_REQUEST, loginSaga),
    watchLogin(),
    watchLogout(),
  ]);
}
