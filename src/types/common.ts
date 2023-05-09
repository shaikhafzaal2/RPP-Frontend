import React from 'react';

export type AlertPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface AsyncFlow {
  message: string;
  status: Status;
}

export type GenericFunction<T = any> = (...arguments_: any[]) => T;

export type Icons =
  | 'bell-o'
  | 'bell'
  | 'bolt'
  | 'check-circle-o'
  | 'check-circle'
  | 'check'
  | 'dot-circle-o'
  | 'exclamation-circle'
  | 'question-circle-o'
  | 'question-circle'
  | 'sign-in'
  | 'sign-out'
  | 'search'
  | 'times-circle-o'
  | 'times-circle'
  | 'times';

export type PlainObject<T = any> = Record<string, T>;

export interface RouteProps {
  component: React.ComponentType<any>;
  exact?: boolean;
  isAuthenticated: boolean;
  path: string;
  to?: string;
}
export interface RouteParams {
  id?: string; // Specify the type of 'id' parameter
}
export interface Status {
  ERROR: 'error';
  IDLE: 'idle';
  READY: 'ready';
  RUNNING: 'running';
  SUCCESS: 'success';
}

export interface SetAppOOptions {
  query: string;
}

export interface ShowAlertOptions {
  icon?: Icons;
  id?: string;
  position?: AlertPosition;
  timeout?: number;
  variant?: string;
}

export interface Company {
  applyLink: any;
  _id: string;
  name: string;
  type: string;
  jobLocation: string;
  faculty: string;
  department:string;
  role: string;
  ctc: number;
  date: Date;
  aboutCompany: string;
  jd: string;
  requiredQualifications: string;
  requiredcgpa: number;
}

export interface Profile {
  _id?: string;
  homeAccountId: string;
  name: string;
  email: string;
  profilePic?: string;
  degree: string;
  faculty: string;
  phoneNumber: number;
  stream: string;
  cgpa: number;
  startYear: number;
  endYear: number;
  resume?: string;
  programme?: string;
  __v?: number;
  update_at?: string;
}

export interface AuthResult {
  idToken: string;
  accessToken: string;
  expiresOn: Date;
}


export interface Filters {
  name?: any;
  type?: any;
  jobLocation?: any;
  department?: any;
  faculty?: any;
  role?: any;
  ctc?: any;
  aboutCompany?: any;
  jd?: any;
  requiredQualifications?: any;
  requiredcgpa?: any;
}
export interface InfoFilters {

  departments: [],
  faculties: [],
  companyTypes:[],
  degrees:[]

}

export type Transitions = 'fade' | 'slideDown' | 'slideLeft' | 'slideRight' | 'slideUp';
