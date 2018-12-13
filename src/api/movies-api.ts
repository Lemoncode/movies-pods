import Axios, { AxiosResponse } from 'axios';
import { MovieEntity } from './model';
import {settings } from '../common-app';

const getMoviesURL = `${settings.serverURL}/api/films`;

const getAllMovies = (page : number = 1): Promise<MovieEntity[]> => {

    const getPaginatedMovies = `${getMoviesURL}?_page=${page}&_limit=${settings.pageSize}`;
    const promise: Promise<MovieEntity[]> = new Promise((resolve, reject) => {
        try {
            Axios.get<MovieEntity[]>(getPaginatedMovies)
                .then(response => resolve(mapMoviesListAPItoModel(response)));
        }
        catch (exception) {
            reject(exception);
        }
    });

    return promise;
}


const getAllMoviesByGenre = (genre : string ): Promise<MovieEntity[]> => {
    const getMoviesByGenreUrl = `${getMoviesURL}?genres_like=${genre}`;
    const promise: Promise<MovieEntity[]> = new Promise((resolve, reject) => {
        try {
            Axios.get<MovieEntity[]>(getMoviesURL)
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
    getAllMoviesByGenre
}