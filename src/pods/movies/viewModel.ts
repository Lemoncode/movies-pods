export interface MovieFilter {
    title: string;
    genere: string;
    year: number;
}

export const createEmptyMovieFilter = (): MovieFilter => ({
    title: '',
    genere: '',
    year: null,
});

export interface MovieEntity {
    id: string;
    title: string;
    genre: string;
    ageRating : number;
    year: number;
}
