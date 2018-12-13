import { MovieEntity } from "../../../core/store/model";
import { actionsEnums } from "../../../common-app/actions";

export type moviesState =  MovieEntity[];

export function createEmptyMovieArray () {
  const moviesArrary = new Array();
  moviesArrary.push({ageRating:0, genre: '',poster:'',  synopsis:'',  title:'',  year:0});
  return moviesArrary;
}

export const moviesReducer =  (state : moviesState = createEmptyMovieArray(), action) => {
    switch (action.type) {
      case actionsEnums.MOVIES_REQUEST_COMPLETED:
        return handleMoviesRequestCompletedAction(action.payload);
    }
  
    return state;
};

const handleMoviesRequestCompletedAction = (movies:moviesState):moviesState => {
    return movies;
}
  