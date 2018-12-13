import Axios, { AxiosResponse } from 'axios';
import { GenreEntity } from "./model";

const getGenresURL = `${process.env['API_MOVIES_URL']}/api/genres`;

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