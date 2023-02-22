import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import { loginFailure, loginSuccess, logoutSuccess } from 'actions';
import { AccountInfo, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from 'authConfig';


const msalInstance = new PublicClientApplication (msalConfig);

export function* loginSaga() {
  
  try {
    let myAccount: AccountInfo;
    myAccount = yield call([msalInstance,msalInstance.loginPopup]);
    yield put(loginSuccess(myAccount));
    
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
