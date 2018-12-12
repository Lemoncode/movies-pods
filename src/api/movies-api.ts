import Axios, { AxiosResponse } from 'axios';
import { MovieEntity } from './model';

const serverURL = 'localhost:3000';
const getMembersURL = `${serverURL}/api/films`;

const getAllMovies = (): Promise<MovieEntity[]> => {
    const promise: Promise<MovieEntity[]> = new Promise((resolve, reject) => {
        try {
            Axios.get<MovieEntity[]>(getMembersURL)
                .then(response => resolve(mapMoviesListAPItoModel(response)));
        }
        catch (exception) {
            reject(exception);
        }
    });

    return promise;
}


const getAllMoviesByGenre = (genre : string ): Promise<MovieEntity[]> => {
    const getMoviesByGenreUrl = `${serverURL}/api/films?genres_like=${genre}`;
    const promise: Promise<MovieEntity[]> = new Promise((resolve, reject) => {
        try {
            Axios.get<MovieEntity[]>(getMembersURL)
                .then(response => resolve(mapMoviesListAPItoModel(response)));
        }
        catch (exception) {
            reject(exception);
        }
    });

    return promise;
}

const mapMoviesListAPItoModel = ({ data }: AxiosResponse<MovieEntity[]>) =>
    data.map(movie => movie);

export const moviesAPI = {
    getAllMovies,
}