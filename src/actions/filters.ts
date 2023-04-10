import { createAction, PayloadAction } from '@reduxjs/toolkit';

import { ActionTypes } from 'literals';

import { Filters } from 'types/common';

export const updateFilters = createAction<PayloadAction<Filters>>(ActionTypes.UPDATE_FILTERS);
