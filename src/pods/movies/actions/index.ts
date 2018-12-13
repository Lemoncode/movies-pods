import { MovieFilter, MovieEntity } from "../viewModel";
import { BaseAction } from "../../../common-app";
import { actionsEnums } from "../../../common-app/actions";

export const moviesRequestAction = (filter?:MovieFilter): BaseAction<MovieFilter> => ({
	type: actionsEnums.MOVIES_REQUEST_STARTED,
	payload: filter
  });
  
  export const moviesRequestActionCompleted = (movieList:MovieEntity[]): BaseAction<MovieEntity[]> => ({
	type: actionsEnums.MOVIES_REQUEST_COMPLETED,
	payload: movieList
  });
