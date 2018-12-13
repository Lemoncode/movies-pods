export const getMovieId = (pathname): number => {
    const param = pathname.split("/");
    return parseInt(param[param.length - 1]);
}