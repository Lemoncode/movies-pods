import { combineReducers } from "redux";
import { movieReducer } from "./move-details.reducer";

export interface MovieDetailsRootState {
    movieDetails
}

export const movieDetailsReducers = combineReducers<MovieDetailsRootState>({
	movieDetails: movieReducer,
  });