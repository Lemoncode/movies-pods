import { MovieEntity } from "../../../core/store/model";
import { actionsEnums } from "../../../common-app/actions";

export type movieState =  MovieEntity[];


export const moviesReducer =  (state : MovieEntity[], action) => {
    switch (action.type) {
      case actionsEnums.MOVIES_REQUEST_COMPLETED:
        return handleMoviesRequestCompletedAction(state, action.payload);
    }
  
    return state;
  };
  
  const handleMoviesRequestCompletedAction = (state : MovieEntity[], movies) => {
    return movies;
  }
  