const baseMovieDetail = '/movie-details/'; 

export const switchRoutes = {
    moviesList: '/',
    movieDetail: `${baseMovieDetail}:id`,
    movieCards: '/movie-cards/' 
}

export const navigationRoutes =  {
    moviesList: switchRoutes.moviesList,
    movieDetail: (id) => `${baseMovieDetail}:${id}`,
    moviesCards: switchRoutes.movieCards,
}