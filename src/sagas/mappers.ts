import * as ApiEntities from '../api/model/movie';
import * as MoviesReducerEntities from "../pods/movies/reducer/model";

export const mapFromMovieApiToMovieViewModel = (movie: ApiEntities.MovieEntity): MoviesReducerEntities.MovieEntity => {
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

export const mapEntityFromApMoviesToReducerMovies = (movies : ApiEntities.MovieList) : MoviesReducerEntities.MovieList => {
   
     return movies && movies.movies && movies.movies.length > 0 
        ? 
        {
            movies: movies.movies.map(mapFromMovieApiToMovieViewModel).filter(element => element!=undefined),
            total: movies.total
        }
        
        : 
        createDefaultMoviesList()
        ;
        
}

const createDefaultMovie = () : MoviesReducerEntities.MovieEntity => ({
    id: "",
    title: "",
    genre: "",
    ageRating: 0,
    year: 0 
});

const createDefaultMoviesList = () : MoviesReducerEntities.MovieList => ({
    movies: [],
    total: 0
})