import { all, fork } from 'redux-saga/effects';
import {watchMovieRequest} from './movieRequest'
import { watchSingleMovieRequest } from '../pods/movie-detail/sagas/';

// Register allwatchFilterGridRequest your watchers
export const rootSaga = function* root() {
  yield all([
  fork(watchMovieRequest),
  fork(watchSingleMovieRequest)
  ])
}