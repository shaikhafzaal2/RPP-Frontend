import { createAction, PayloadAction } from '@reduxjs/toolkit';

import { ActionTypes } from 'literals';
import { actionPayload } from 'modules/helpers';

import { Filters,  } from 'types/common';

export const updateFilters = createAction<PayloadAction<Filters>>(ActionTypes.UPDATE_FILTERS);
export const getFiltersRequest = createAction(ActionTypes.GET_FILTER_REQUEST);
export const getFiltersRequestSuccess = createAction(ActionTypes.GET_FILTER_SUCCESS,  (payload: any) => actionPayload(payload),);
export const getFiltersRequestFailure = createAction(ActionTypes.GET_FILTER_FAILURE);