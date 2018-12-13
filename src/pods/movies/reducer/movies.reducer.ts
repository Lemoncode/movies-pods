
import { actionsEnums, BaseAction } from "../../../common-app/actions";
import { MovieList, MovieEntity } from "./model";


export type movieCollection =  MovieEntity[];

export interface MoviesState {
  movies: MovieEntity[],
  total: number
}
export const moviesReducer  = (state:MoviesState = createDefaultMovieList() , action:BaseAction) : MoviesState => {
    switch (action.type) {
      case actionsEnums.MOVIES_REQUEST_COMPLETED:
        return handleMovieRequestCompletedAction(state, action.payload);
    }
  
    return state;
};

const createDefaultMovieList = () : MoviesState => ({
    movies : [],
    total: 0
});

const handleMovieRequestCompletedAction = (state:MoviesState, payload: MovieList) : MoviesState => ({
  movies: payload.movies,
  total: payload.total
});
  