import * as MovieEntity from "./viewModel";
import * as MovieEntityApi from "../../api/model/movie";

export const mapFromMovieApiToMovieViewModel = (movie: MovieEntityApi.MovieEntity): MovieEntity.MovieEntity => {
    return movie == undefined 
    ? 
        createDefaultMovie()
    :
        {
            id: movie.id,
            title: movie.title,
            genre: movie.genres && movie.genres.length > 0 ? movie.genres[0]: "",
            ageRating: movie.agerating && movie.agerating.length > 0 ? movie.agerating[0]:0,
            year: movie.year
        } 
}

export const mapFromMovieCollectionVMToMovieViewModel = (movies : MovieEntityApi.MovieEntity[]) : MovieEntity.MovieEntity[] => {
    return movies && movies.length > 0 ? movies.map(mapFromMovieApiToMovieViewModel).filter(element => element!=undefined) : [];
}

export const createDefaultMovie = () : MovieEntity.MovieEntity => ({
    id: "",
    title: "",
    genre: "",
    ageRating: 0,
    year: 0 
});
    
