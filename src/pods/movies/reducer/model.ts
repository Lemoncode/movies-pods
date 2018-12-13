export interface MovieFilter {
    title: string;
    genre: string;
    year: number;
}

export interface MovieEntity {
    id: string;
    title: string;
    genre: string;
    ageRating : number;
    year: number;
}

export interface MovieList {
    movies : MovieEntity[],
    total: number
}
