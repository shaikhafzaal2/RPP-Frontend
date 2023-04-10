import { keyMirror } from '@gilbarbara/helpers';

import { Status } from 'types';

export const ActionTypes = keyMirror({
  GITHUB_GET_REPOS_REQUEST: undefined,
  GITHUB_GET_REPOS_SUCCESS: undefined,
  GITHUB_GET_REPOS_FAILURE: undefined,
  HIDE_ALERT: undefined,
  SHOW_ALERT: undefined,
  SET_APP_OPTIONS: undefined, 
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT: undefined,
  USER_LOGIN_REQUEST: undefined,
  USER_LOGOUT_REQUEST: undefined,  
  USER_LOGOUT_SUCCESS: undefined,
  USER_GET_COMPANY_SUCCESS:undefined,
  USER_GET_COMPANY_REQUEST:undefined,  
  USER_GET_COMPANY_FAILURE:undefined,  
  UPDATE_FILTERS:undefined,
});

export const STATUS: Status = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
