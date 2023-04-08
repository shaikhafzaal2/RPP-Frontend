import { createAction, PayloadAction } from '@reduxjs/toolkit';

import { ActionTypes } from 'literals';
import { actionPayload } from 'modules/helpers';
import { Company } from 'types/common';

export const getCompanyRequest = createAction(ActionTypes.USER_GET_COMPANY_REQUEST,  (payload: any) => actionPayload(payload),);
export const getCompanySuccess = createAction<PayloadAction<Company>>(ActionTypes.USER_GET_COMPANY_SUCCESS);
export const getCompanyFailure = createAction(ActionTypes.USER_GET_COMPANY_FAILURE,  (payload: any) => actionPayload(payload),);