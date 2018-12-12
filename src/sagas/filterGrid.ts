import { takeEvery, put, call } from 'redux-saga/effects';
import { coreActionIds } from '../core/const';

export function* watchFilterGridRequest(){
	yield takeEvery(coreActionIds.FILTER_GRID);
}

function* filterGrid(){
	//const data = yield call(getMovieList)
	console.log('filterGrid saga')
	yield put()
}