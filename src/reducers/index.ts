import alerts, { alertsState } from './alerts';
import app, { appState } from './app';
import company, { companyState } from './company';
import  filters, { filterState } from './filters';
import github, { githubState } from './github';
import user, { userState } from './user';

export const initialState = {
  alerts: alertsState,
  app: appState,
  github: githubState,
  user: userState,
  company: companyState,
  filters :filterState
};

export default {
  ...alerts,
  ...app,
  ...github,
  ...user,
  ...company,
  ...filters
};
