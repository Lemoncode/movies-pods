import { MovieEntity } from "../../../core/store/model";
import { actionsEnums } from "../../../common-app/actions";

export type movieState =  MovieEntity[];

export const createEmptyMovieEntity = (): MovieEntity => ({
  ageRating: 0,
  genre: '',
  poster:'',
  synopsis:'',
  title:'',
  year:0,
});

export function createEmptyMovieArray () {
  const moviesArrary = new Array();
  moviesArrary.push(createEmptyMovieEntity());
  return moviesArrary;
}

export const moviesReducer =  (state : MovieEntity[] = createEmptyMovieArray(), action) => {
    switch (action.type) {
      case actionsEnums.MOVIES_REQUEST_COMPLETED:
        return handleMoviesRequestCompletedAction(state, action.payload);
    }
  
    return state;
};

const handleMoviesRequestCompletedAction = (state : MovieEntity[], movies):MovieEntity[] => {
    return movies;
}
  