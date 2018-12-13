export interface MovieEntity {
    id : string,
    poster : string;
    title : string;
    genres : string[];
    agerating : number[];
    year : number;
    synopsis : string;
}

export interface MovieList {
    movies : MovieEntity[],
    total: number
}