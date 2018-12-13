import { takeEvery, put, call } from 'redux-saga/effects';
import { actionsEnums, BaseAction } from '../../../common-app/actions';
import { moviesAPI } from '../../../api/movies-api'
import { MovieEntity } from '../../../api/model';
import { movieRequestActionCompleted } from '../actions';

export function* watchSingleMovieRequest(){
	yield takeEvery(actionsEnums.REQUEST_SINGLE_MOVIE_STARTED, loadMovie);
}

function* loadMovie(action: BaseAction){
	try
	{	
		const movie = yield call(moviesAPI.getMovieById, action.payload)
		yield put(movieRequestActionCompleted(movie))
	}catch(e)
	{
		//TODO: add error handling
		console.log("exc:",e);
	}
}