import React from 'react';
import { Dispatch } from 'redux';
import { Variants } from 'styled-minimal/lib/types';
import { ValueOf } from 'type-fest';

import { AlertPosition, Icons, Status } from './common';

export interface AlertData {
  icon: Icons;
  id: string;
  message: React.ReactNode;
  position: AlertPosition;
  timeout: number;
  variant: Variants;
}

export interface Topic {
  cached: boolean;
  data: Array<Record<string, any>>;
  message: string;
  status: ValueOf<Status>;
  updatedAt: number;
}

export interface AlertsState {
  data: AlertData[];
}

export interface AppState {
  query: string;
}

export interface GitHubState {
  topics: Record<string, Topic>;
}

export interface UserState {
  isLoggedIn: boolean;
  user: any | undefined;
  error: any | undefined;
}

export interface CompaniesState {
  companies: any | undefined;
  error: any | undefined;
}

export interface ProfilesState {
  loading: Boolean;
  profiles: any | undefined;
  error: any | undefined;
}
export interface FilterState {
  filters: {  
    name?: any | undefined;
    type?: any | undefined;
    jobLocation?: any | undefined;
    department?:any | undefined;
    faculty?: any | undefined;
    role?: any | undefined;
    ctc?: any | undefined;
    aboutCompany?: any | undefined;
    jd?: any | undefined;
    requiredQualifications?: any | undefined;
    requiredcgpa?: any | undefined;
     
  },
  infoFilters:{
    faculties:Array<Record<string, any>>;
    departments:Array<Record<string, any>>;
    companyTypes:Array<Record<string, any>>;
    degrees:Array<Record<string, any>>;
  }; 
}
export interface RootState {
  alerts: AlertsState;
  app: AppState;
  github: GitHubState;
  user: UserState;
  company:CompaniesState;
  filters:FilterState;
  profile:ProfilesState;
}

export interface WithDispatch {
  dispatch: Dispatch;
}
