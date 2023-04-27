import { all, fork } from 'redux-saga/effects';

// import github from './github';
import user from './user';
import company from './company'
import profile from './profile'
import filter from './filter'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(user), fork(company), fork(profile),fork(filter) ]);
}
