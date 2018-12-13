import { movieDetailsVM } from "../movie-detail.vm";
import { BaseAction } from "../../../common-app";
import { actionsEnums } from "../../../common-app/actions";
import { createDefaultMovie } from "../movie-details.mapper";

export type movieDetails = movieDetailsVM;

export const movieReducer = (state: movieDetails = createDefaultMovie(), action: BaseAction) => {
    switch(action.type){
        case actionsEnums.REQUEST_SINGLE_MOVIE_COMPLETED:
            return handleRequestSingleMovie(action.payload);
    }
   return state  
}

const handleRequestSingleMovie = (movieDetails: movieDetails) => (
    movieDetails
)
