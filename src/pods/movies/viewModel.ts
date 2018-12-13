export interface MovieFilter {
    title: string;
    genre: string;
    year: string;
}

export const createEmptyMovieFilter = (): MovieFilter => ({
    title: '',
    genre: '',
    year: null,
});

export interface MovieEntity {
    id: string;
    title: string;
    genre: string;
    ageRating : number;
    year: number;
}