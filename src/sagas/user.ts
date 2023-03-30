import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import { loginFailure,  loginSuccess,  logoutSuccess } from 'actions';
import { AccountInfo, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from 'authConfig';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


const msalInstance = new PublicClientApplication (msalConfig);
axios.defaults.baseURL = location.hostname === "localhost"?'http://localhost:3001':'https://rppmainbackend.azurewebsites.net/';


export function* loginSaga() {
  
  try {
    let myAccount: AccountInfo;
    myAccount = yield call([msalInstance,msalInstance.loginPopup]);
    const accessToken = myAccount.idToken;
  
    localStorage.setItem('idToken', accessToken?accessToken:'');
    console.log(myAccount);

    console.log("localStorage token: "+localStorage.getItem('idToken'));

    const config: AxiosRequestConfig  = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
    const data = {
      homeAccountId: (myAccount as any).account.homeAccountId,
      name:(myAccount as any).account.name,
      email: (myAccount as any).account.username,
      admin:false
    }
    console.log(data);
    const response : AxiosResponse = yield call(axios.post, '/users/register', data, config);
    console.log(response);
    if (response.status==200) yield put(loginSuccess(myAccount));
    
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
