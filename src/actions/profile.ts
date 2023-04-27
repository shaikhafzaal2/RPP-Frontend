import { createAction, PayloadAction } from '@reduxjs/toolkit';

import { ActionTypes } from 'literals';
import { actionPayload } from 'modules/helpers';
import { Profile } from 'types/common';

export const getProfileRequest = createAction(ActionTypes.USER_GET_PROFILE_REQUEST,  (payload: any) => actionPayload(payload),);
export const getProfileSuccess = createAction<PayloadAction<Profile>>(ActionTypes.USER_GET_PROFILE_SUCCESS);
export const getProfileFailure = createAction(ActionTypes.USER_GET_PROFILE_FAILURE,  (payload: any) => actionPayload(payload),)
export const uploadProfileRequest = createAction(ActionTypes.UPLOAD_PROFILE_REQUEST,(payload: any) => actionPayload(payload),);
export const uploadProfileSuccess = createAction(ActionTypes.UPLOAD_PROFILE_SUCCESS);
export const uploadProfileFailure = createAction(ActionTypes.UPLOAD_PROFILE_FAILURE);
