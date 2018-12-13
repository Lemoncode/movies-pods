import { MovieEntity } from "../../api/model";


export interface movieDetailsVM {
    id: number;
    title: string;
    genre: string;
    ageRating: number;
    year: number;
    synopsis: string;
    posterUrl: string;
}

