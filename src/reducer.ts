import { combineReducers } from 'redux';
import { coreRootReducer } from './core';
import { connectRouter } from 'connected-react-router'
import { reducers, MoviesState, MoviesReducerState } from "./pods/movies/reducer";
import { MovieDetailsRootState, movieDetailsReducers } from 'pods/movie-detail/reducers';

export interface RootState {
  router:any;
  core: any;
  movies: MoviesReducerState;
  movieDetails: MovieDetailsRootState;
}

// Root reducer.
export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  core: coreRootReducer,
  movies: reducers,
  movieDetails: movieDetailsReducers,
});
