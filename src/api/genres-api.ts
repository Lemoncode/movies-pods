import Axios, { AxiosResponse } from 'axios';
import { GenreEntity } from "./model";
import { createGenerateClassName } from '@material-ui/core';

const serverURL = 'localhost:3000';
const getGenresURL = `${serverURL}/api/genres`;

const getAllGenres = () : Promise<GenreEntity[]> => {
    const promise: Promise<GenreEntity[]> = new Promise((resolve, reject) => {
        try {
            Axios.get<GenreEntity[]>(getGenresURL).then(
                response => resolve(mapGenresToAPIModel(response)));
        }
        catch (exception) {
            reject(exception);
        }
    });

    return promise;
}

const mapGenresToAPIModel = ({ data }: AxiosResponse<GenreEntity[]>) =>
    data.map(genre => genre);

    export const genresAPI = {
        getAllGenres,
    }