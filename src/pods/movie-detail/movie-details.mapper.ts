import * as MovieEntityApi from "../../api/model/movie";
import { movieDetailsVM } from "./movie-detail.vm";

export const mapFromMovieApiToMovieViewModel = (movie: MovieEntityApi.MovieEntity): movieDetailsVM => {
    return movie === undefined
        ?
        createDefaultMovie()
        :
        {
            id: parseInt(movie.id, 10),
            title: movie.title,
            genre: movie.genres && movie.genres.length > 0 ? movie.genres[0] : "",
            ageRating: movie.agerating && movie.agerating.length > 0 ? movie.agerating[0] : 0,
            year: movie.year,
            posterUrl: movie.poster,
            synopsis: movie.synopsis
        }
}

export const createDefaultMovie = (): movieDetailsVM => ({
    id: 0,
    title: "",
    genre: "",
    ageRating: 0,
    year: 0,
    posterUrl: '',
    synopsis: ''
});

