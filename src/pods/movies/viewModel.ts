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
    id: number;
    title: string;
    genre: string;
    age_rating: number;
    year: number;
}
