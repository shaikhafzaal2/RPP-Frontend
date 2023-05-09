import { all, fork } from 'redux-saga/effects';


import user from './user';
import company from './company'
import profile from './profile'
import filter from './filter'
import student from './student'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(user), fork(company), fork(profile),fork(filter), fork(student) ]);
}
