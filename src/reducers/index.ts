import alerts, { alertsState } from './alerts';
import app, { appState } from './app';
import company, { companyState } from './company';
import  filters, { filterState } from './filters';
import github, { githubState } from './github';
import profile, { profileState } from './profile';
import students, { studentsState } from './students';
import user, { userState } from './user';

export const initialState = {
  alerts: alertsState,
  app: appState,
  github: githubState,
  user: userState,
  company: companyState,
  filters : filterState,
  profile : profileState,
  student : studentsState
};

export default {
  ...alerts,
  ...app,
  ...github,
  ...user,
  ...company,
  ...filters,
  ...profile,
  ...students,
};
