import { takeEvery, put, call } from 'redux-saga/effects';
import { actionsEnums } from '../common-app/actions';
import { moviesRequestActionCompleted } from '../pods/movies/actions';
import { moviesAPI } from '../api/movies-api'
import { MovieEntity } from '../api/model';

export function* watchMovieRequest(){
	yield takeEvery(actionsEnums.MOVIES_REQUEST_STARTED, loadMovies);
}

function* loadMovies(action){
	try
	{	
		const movieList = yield call(moviesAPI.getAllMovies)
		yield put(moviesRequestActionCompleted(movieList))
	}catch(e)
	{
		//TODO: add error handling
		console.log("exc:",e);
	}
}