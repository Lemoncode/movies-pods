import { Options, createDefaultOpions } from "./movies-api";

export const calculateUrlStringByOptions = (options: Options, moviesUrl: string): string => {
    let url = `${moviesUrl}/api/films`;
    if (options === undefined) {
        options = createDefaultOpions();
    }
    let queryString = `_page=${options.pageIndex}&_limit=${options.pageSize}`;
    if (options.filter && options.filter.genre !== "") {
        queryString += `&genres_like=${options.filter.genre}`;
    }
    if (options.filter && options.filter.title !== "") {
        queryString += `&title_like=${options.filter.title}`;
    }
    if (options.filter && options.filter.year !== "") {
        queryString += `&year=${options.filter.year}`;
    }
    return `${url}?${queryString}`;
}