import Axios, { AxiosResponse } from 'axios';
import { MovieEntity } from './model';
import { settings } from '../common-app/config';

const getMoviesURL = settings.API_Movies_URL;


const getAllMovies = (options: Options = createDefaultOpions()): Promise<MovieEntity[]> => {
    const getPaginatedMovies = `${getMoviesURL}?_page=${options.pageIndex}&_limit=${options.pageSize}`;
	const promise: Promise<MovieEntity[]> = new Promise((resolve, reject) => 
		Axios.get<MovieEntity[]>(getPaginatedMovies)
			.then(response => resolve(mapMoviesListAPItoModel(response)))
			.catch(error=> reject(error))
    );

    return promise;
}


const getAllMoviesByGenre = (genre : string ): Promise<MovieEntity[]> => {
    const getMoviesByGenreUrl = `${getMoviesURL}?genres_like=${genre}`;
	const promise: Promise<MovieEntity[]> = new Promise((resolve, reject) => 
	 Axios.get<MovieEntity[]>(getMoviesByGenreUrl)
				.then(response => resolve(mapMoviesListAPItoModel(response)))
				.catch(error=> reject(error))
	);
    return promise;
}

const mapMoviesListAPItoModel = ({ data }: AxiosResponse<MovieEntity[]>) =>
    data.map(movie => movie);

export const moviesAPI = {
    getAllMovies,
    getAllMoviesByGenre
}

export interface Options {
    pageIndex: number,
    pageSize: number 
}

export const createDefaultOpions = () : Options => (
    {
        pageIndex: 1,
        pageSize: settings.pageSize
    }
);
