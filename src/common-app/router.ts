const baseMovieDetail = '/movie-details/'; 

export const switchRoutes = {
    moviesList: '/',
    movieDetail: `${baseMovieDetail}:id`
}

export const navigationRoutes =  {
    moviesList: switchRoutes.moviesList,
    movieDetail: (id) => `${baseMovieDetail}:${id}`
}