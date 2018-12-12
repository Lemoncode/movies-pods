import { all, fork } from 'redux-saga/effects';

// Register all your watchers
export const rootSaga = function* root() {
  yield all([
	//fork(filter),
  ])
}