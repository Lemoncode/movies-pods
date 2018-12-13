import Axios, { AxiosResponse } from 'axios';
import { MovieEntity } from './model';
import { settings } from '../common-app';
import { MovieList } from './model/movie';

const getMoviesURL = settings.API_Movies_URL;

const getAllMovies = (options: Options = createDefaultOpions()): Promise<MovieList> => {
    const getPaginatedMovies = `${getMoviesURL}/api/films?_page=${options.pageIndex}&_limit=${options.pageSize}`;
    const promise: Promise<MovieList> = new Promise((resolve, reject) =>
        Axios.get<MovieEntity[]>(getPaginatedMovies)
            .then(response => resolve(mapMoviesListAPItoModel(response)))
            .catch(error => reject(error))
    );

    return promise;
}

const getAllMoviesByGenre = (genre: string): Promise<MovieList> => {
    const getMoviesByGenreUrl = `${getMoviesURL}/api/films?genres_like=${genre}`;
    const promise: Promise<MovieList> = new Promise((resolve, reject) =>
        Axios.get<MovieEntity[]>(getMoviesByGenreUrl)
            .then(response => resolve(mapMoviesListAPItoModel(response)))
            .catch(error => reject(error))
    );
    return promise;
}


const getMovieById = (id: number): Promise<MovieEntity> => {
    const getMovieByIDUrl = `${getMoviesURL}/${id}`;
    const promise: Promise<MovieEntity> = new Promise((resolve, reject) =>
        Axios.get<MovieEntity>(getMovieByIDUrl).then(response => resolve(mapMovieAPIToModel(response))).catch(error => reject(error)));
    return promise;
}

const mapMoviesListAPItoModel = ({ data, headers }: AxiosResponse<MovieEntity[]>) =>
    ({
        movies: data.map(movie => movie),
        total: headers["x-total-count"]
    })


const mapMovieAPIToModel = ({ data }: AxiosResponse<MovieEntity>): MovieEntity =>
    data

export const moviesAPI = {
    getAllMovies,
    getAllMoviesByGenre,
    getMovieById
}

export interface Options {
    pageIndex: number;
    pageSize: number;
    filter: MovieFilter;
}

export interface MovieFilter {
    title: string;
    genre: string;
    year: string;
}

export const createDefaultOpions = (): Options => (
    {
        pageIndex: 1,
        pageSize: settings.pageSize,
        filter: undefined,
    }
);
