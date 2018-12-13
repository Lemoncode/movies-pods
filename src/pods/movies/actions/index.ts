import { MovieFilter, MovieEntity } from "../viewModel";
import { BaseAction } from "../../../common-app";
import { actionsEnums } from "../../../common-app/actions";
import { MovieList } from "../reducer/model";


export const moviesRequestAction = (filter?: MovieFilter): BaseAction<MovieFilter> => ({
	type: actionsEnums.MOVIES_REQUEST_STARTED,
	payload: filter
});

export const moviesRequestActionCompleted = (movieList: MovieList): BaseAction<MovieList> => ({
	type: actionsEnums.MOVIES_REQUEST_COMPLETED,
	payload: movieList
});
