import { all, call, put, takeEvery  } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import {  getProfileSuccess, getProfileFailure, uploadProfileSuccess, uploadProfileFailure } from 'actions';

import axios, {  AxiosRequestConfig, AxiosResponse } from 'axios';



export function* getProfilesSaga(payload:any) {
  console.log("This is the payload in profilesaga"+ payload.payload);
  
  
  
  const url = '/profiles/'+payload.payload;
  console.log("The constructed url is: " +url);
  try {
    
   
    const response : AxiosResponse = yield call(axios.get, url,);
    const pdfUrl = response.data.resume;

    const pdfDataResponse: AxiosResponse<Blob> = yield call(axios.get,pdfUrl, {
      responseType: 'blob',
    });


    const pdfBlob = new Blob([pdfDataResponse.data], { type: 'application/pdf' });
    const urlr = URL.createObjectURL(pdfBlob);

    console.log("New url is:" +urlr);

    response.data.resumenew = urlr

    const newaccessToken =  localStorage.getItem('idToken');

    axios.defaults.headers.common['Authorization'] =  `Bearer ${newaccessToken}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';

    console.log("New responce is:"+ JSON.stringify( response));
    if (response.status==200) yield put(getProfileSuccess(response.data));
    
  } catch (error) {
    console.log(error)
    yield put(getProfileFailure(error))
  }
}

function* uploadProfileSaga(action: any) {
  try {

    const newaccessToken =  localStorage.getItem('idToken');

        const config: AxiosRequestConfig  = {
      headers: {
        'Authorization': `Bearer ${newaccessToken}`,
        'Content-Type': 'application/json'
      }
    }

    const formData = new FormData();
    const { profile, image, pdf } = action.payload;
    formData.append("profile", JSON.stringify(profile));
    formData.append("profilePic", image);
    formData.append("resume", pdf);
    const response : AxiosResponse = yield call(axios.post, "/profiles/register", formData,config);
    if (response.status==200) yield put (uploadProfileSuccess());
    // if (response.status==200) yield put (getProfileRequest(profile.homeAccountId));
  } catch (error) {
    yield put(uploadProfileFailure());
  }
}




function* watchProfiles() {
  yield takeEvery(ActionTypes.USER_GET_PROFILE_REQUEST, getProfilesSaga);
  yield takeEvery(ActionTypes.UPLOAD_PROFILE_REQUEST, uploadProfileSaga);
}

export default function* root() {
  yield all([   
    watchProfiles(),   
  ]);
}
