import { AccountInfo } from '@azure/msal-browser';
import { createAction } from '@reduxjs/toolkit';

import { ActionTypes } from 'literals';
import { actionPayload } from 'modules/helpers';



export const loginSuccess = createAction(ActionTypes.USER_LOGIN_SUCCESS,(payload:AccountInfo) => actionPayload(payload));
export const loginFailure = createAction(ActionTypes.USER_LOGIN_FAILURE,  (payload: any) => actionPayload(payload),);
export const loginRequest = createAction(ActionTypes.USER_LOGIN_REQUEST);
export const logoutRequest = createAction(ActionTypes.USER_LOGOUT_REQUEST);
export const logoutSuccess = createAction(ActionTypes.USER_LOGOUT_SUCCESS);


