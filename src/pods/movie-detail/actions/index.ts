import { BaseAction } from "../../../common-app";
import { actionsEnums } from "../../../common-app/actions";
import { movieDetails } from "../reducers/move-details.reducer";

export const movieRequestStartAction = (id: number): BaseAction<number> => ({
	type: actionsEnums.REQUEST_SINGLE_MOVIE_STARTED,
	payload: id
  });
  
  export const movieRequestActionCompleted = (movie:movieDetails): BaseAction<movieDetails> => ({
	type: actionsEnums.REQUEST_SINGLE_MOVIE_COMPLETED,
	payload: movie
  });