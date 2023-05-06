import { createSelector } from '@reduxjs/toolkit';



import { RootState } from 'types';

export const selectApp = createSelector(
  (state: RootState) => state.app,
  app => app,
);

export const selectGitHub = createSelector(
  (state: RootState) => state.github,
  github => github,
);

export const selectUser = createSelector(
  (state: RootState) => state.user,
  user => user,
);

export const selectCompany = createSelector(
  (state: RootState) => state.company,
  company => company,
);

export const selectProfile = createSelector(
  (state: RootState) => state.profile,
  profile => profile,
);
export const selectFilter = createSelector(
  (state: RootState) => state.filters,
  filters => filters,
);
export const selectStudents = createSelector(
  (state: RootState) => state.students,
  students => students,
);
