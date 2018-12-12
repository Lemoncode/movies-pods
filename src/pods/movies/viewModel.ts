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
