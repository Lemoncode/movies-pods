import { takeEvery, put, call } from 'redux-saga/effects';
import { actionsEnums } from '../common-app/actions';
import { moviesRequestActionCompleted } from '../pods/movies/actions';
import { moviesAPI, Options } from '../api/movies-api'
import { settings } from '../common-app/config';
import { MovieFilter } from '../pods/movies/viewModel';
import { MovieList } from '../api/model/movie';
import { mapEntityFromApMoviesToReducerMovies } from './mappers';

export function* watchMovieRequest(){
	yield takeEvery(actionsEnums.MOVIES_REQUEST_STARTED, loadMovies);
}

function* loadMovies(action){
	try
	{	
		const filter : MovieFilter = action.payload;
		const options : Options = {
			pageIndex:1,
			pageSize:settings.pageSize,
			filter: filter?{title: filter.title,
					 genre: filter.genre,
					 year: filter.year,
					}:undefined
		  };
		const movieList : MovieList = yield call(moviesAPI.getAllMovies, options);
		yield put(moviesRequestActionCompleted(mapEntityFromApMoviesToReducerMovies(movieList)));
	}catch(e)
	{
		//TODO: add error handling
		console.log("exc:",e);
	}
}