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
  USER_GET_PROFILE_SUCCESS:undefined,
  USER_GET_PROFILE_REQUEST:undefined,  
  USER_GET_PROFILE_FAILURE:undefined,    
  UPDATE_FILTERS:undefined,
  GET_FILTER_REQUEST:undefined,
  GET_FILTER_SUCCESS:undefined,
  GET_FILTER_FAILURE:undefined,
  UPLOAD_PROFILE_SUCCESS:undefined,
  UPLOAD_PROFILE_FAILURE:undefined,
  UPLOAD_PROFILE_REQUEST:undefined,
  ADMIN_LOGIN_REQUEST:undefined,
  ADMIN_LOGIN_SUCCESS:undefined,
  ADMIN_DELETE_COMPANY:undefined,
  ADMIN_POST_COMPANY:undefined,
  ADMIN_REMOVE_STUDENT:undefined,
  GET_STUDENT_REQUEST:undefined,
  GET_STUDENT_SUCCESS:undefined,
  GET_STUDENT_FAILURE:undefined,
});

export const STATUS: Status = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
