import Axios, { AxiosResponse } from 'axios';
import { MovieEntity } from './model';
import {settings } from '../common-app';

const getMembersURL = `${settings.serverURL}/api/films`;

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

const mapMoviesListAPItoModel = ({ data }: AxiosResponse<MovieEntity[]>) =>
    data.map(movie => movie);

export const moviesAPI = {
    getAllMovies,
}