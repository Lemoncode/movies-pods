import { takeEvery, put, call } from 'redux-saga/effects';
import { actionsEnums } from '../common-app/actions';
import { moviesRequestActionCompleted } from '../pods/movies/actions';
import { moviesAPI } from '../api/movies-api'
import { MovieEntity } from '../api/model';

export function* watchMovieRequest(){
	yield takeEvery(actionsEnums.MOVIES_REQUEST, loadMovies);
}

function* loadMovies(action){
	const movieList = yield moviesAPI.getAllMovies()
	if(movieList)
	{
		yield put(moviesRequestActionCompleted(movieList))
	}
}