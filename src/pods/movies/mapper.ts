import * as MovieEntity from "./viewModel";
import * as MovieEntityApi from "../../api/model/movie";

export const mapFromMovieApiToMovieViewModel = (movie: MovieEntityApi.MovieEntity): MovieEntity.MovieEntity => {
    let returnMovie: MovieEntity.MovieEntity = undefined;
    if (movie !== undefined) {
        const movieEntity: MovieEntity.MovieEntity = {
            id: movie.id,
            title: movie.title,
            genre: movie.genres[0],
            age_rating: movie.agerating[0],
            year: movie.year
        };
        returnMovie = movieEntity
    }
    return returnMovie;
}

export const mapFromMovieCollectionVMToMovieViewModel = (movies : MovieEntityApi.MovieEntity[]) : MovieEntity.MovieEntity[] => {
    return movies.map(mapFromMovieApiToMovieViewModel);
}
    
