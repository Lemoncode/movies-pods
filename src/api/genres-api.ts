import Axios, { AxiosResponse } from 'axios';
import { GenreEntity } from "./model";
import { settings } from '../common-app/config';

const getMoviesURL = settings.API_Movies_URL;
const getGenresURL = `${getMoviesURL}/api/genres`;

const getAllGenres = (): Promise<GenreEntity[]> => {
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