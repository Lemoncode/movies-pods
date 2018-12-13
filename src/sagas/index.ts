import { all, fork } from 'redux-saga/effects';
import {watchMovieRequest} from './movieRequest'

// Register allwatchFilterGridRequest your watchers
export const rootSaga = function* root() {
  yield all([
	fork(watchMovieRequest),
  ])
}