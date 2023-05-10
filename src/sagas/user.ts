import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import { AdminLoginSuccess, getFiltersRequest, getProfileRequest, loginFailure,  loginSuccess,  logoutSuccess } from 'actions';
import { AccountInfo, PublicClientApplication } from "@azure/msal-browser";
import { loginRequest, msalConfig } from 'authConfig';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthResult } from 'types';
import { callMsGraph } from 'graph';





const msalInstance = new PublicClientApplication (msalConfig);
axios.defaults.baseURL = location.hostname === "localhost"?'http://localhost:3001':'https://rppmainbackend.azurewebsites.net/';



export function* loginSaga() {  
  try {
    let myAccount: AccountInfo;
    myAccount = yield msalInstance.loginPopup(loginRequest);  //call([msalInstance,msalInstance.loginPopup]);   
    console.log(myAccount);

 
    const tokenRequest = {
      scopes: ["User.Read", "profile", "openid"]
      ,
      requested_expiry: 4200 // 2 hours
    };

    msalInstance.setActiveAccount(myAccount);

    const res :AuthResult = yield call([msalInstance, msalInstance .acquireTokenSilent], tokenRequest);

    const newaccessToken = res.idToken;
    console.log('NewTokenData:'+ newaccessToken);
    localStorage.setItem('idToken', newaccessToken?newaccessToken:'');

    console.log("localStorage token: "+localStorage.getItem('idToken'));

    const graphdata:AxiosResponse = yield call( callMsGraph,res.accessToken);
    console.log("graph data: "+ JSON.stringify( graphdata));

    const config: AxiosRequestConfig  = {
      headers: {
        'Authorization': `Bearer ${newaccessToken}`,
        'Content-Type': 'application/json'
      }
    }
    const data = {
      homeAccountId: (myAccount as any).account.homeAccountId,
      name:(myAccount as any).account.name,
      email: (myAccount as any).account.username,
      phoneNumber:(graphdata as any).mobilePhone,
      admin: false
    }

    console.log(data);
    const response : AxiosResponse = yield call(axios.post, '/users/register', data,config);
    console.log(response);
    if (response.status==200) 
    yield put(loginSuccess(response.data.user)),    
    yield put (getFiltersRequest()),
    yield put(getProfileRequest((myAccount as any).account.homeAccountId))
    
  } catch (error) {
    console.log(error)
    yield put(loginFailure(error))
  }
}


export function* AdminloginSaga() {
  
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

    const graphdata:AxiosResponse = yield call( callMsGraph,res.accessToken);
    console.log("graph data: "+ JSON.stringify( graphdata));

    if ((graphdata as any).jobTitle === 'Student') {
      alert("Login failed unauthorized Account")
      throw new Error('Login failed unauthorized Account');
      
    }

    const config: AxiosRequestConfig  = {
      headers: {
        'Authorization': `Bearer ${newaccessToken}`,
        'Content-Type': 'application/json'
      }
    }
    const data = {
      homeAccountId: (myAccount as any).account.homeAccountId,
      name:(myAccount as any).account.name,
      email: (myAccount as any).account.username,
      phoneNumber:(graphdata as any).mobilePhone,
      admin:true
    }
    
    console.log(data);
    const response : AxiosResponse = (graphdata as any).jobTitle!="Student"? yield call(axios.post, '/users/register', data,config):null;
    console.log(response);
    if (response.status==200)
    yield put(AdminLoginSuccess(myAccount))
   
    yield put (getFiltersRequest());        
    
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

function* watchAdminLogin() {
  yield takeEvery(ActionTypes.ADMIN_LOGIN_REQUEST, AdminloginSaga);
}

export default function* root() {
  yield all([   
    watchLogin(),
    watchLogout(),
    watchAdminLogin(),
  ]);
}
