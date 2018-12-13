export const getMovieId = (pathname): number => {
    const param = pathname.split("/");
    const movieId = parseInt(param[param.length - 1]);
    return (!isNaN(movieId)) ? movieId : 0;
}