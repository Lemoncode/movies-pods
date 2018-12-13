import { filterReducer } from './filter';
import { combineReducers } from 'redux';
import { moviesReducer } from './movies.reducer';
import { MovieList } from './model';


export * from './filter';
export * from './movies.reducer';

export interface MoviesReducerState {
    filterState: any;
    moviesState: MovieList;
    
  };

export const reducers = combineReducers<MoviesReducerState>({
    filterState: filterReducer,
    moviesState: moviesReducer,
  });