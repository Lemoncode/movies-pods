import { combineReducers } from "redux";
import { movieReducer } from "./move-details.reducer";

export interface State {
    movieDetails
}

export const reducers = combineReducers<State>({
	movieDetails: movieReducer,
  });