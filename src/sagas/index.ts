import { all, fork } from 'redux-saga/effects';

import github from './github';
import user from './user';
import company from './company'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(github), fork(user), fork(company) ]);
}
