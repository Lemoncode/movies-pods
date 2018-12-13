import { MovieFilter } from "../viewModel";
import { BaseAction } from "../../../common-app";
import { actionsEnums } from "../../../common-app/actions";
import { MovieEntity } from "../components/view-model";

export const moviesRequestAction = (filter?:MovieFilter): BaseAction<MovieFilter> => ({
	type: actionsEnums.MOVIES_REQUEST,
	payload: filter
  });
  
  export const moviesRequestActionCompleted = (movieList:MovieEntity[]): BaseAction<MovieEntity[]> => ({
	type: actionsEnums.MOVIES_REQUEST_COMPLETED,
	payload: movieList
  });
