const baseMovieDetail = '/movie-details/'; 
const baseMovieEdit = '/movies/edit/'; 


export const switchRoutes = {
    moviesList: '/',
    movieDetail: `${baseMovieDetail}:id`,
    movieCards: '/movie-cards/',
    movieEdit: `${baseMovieEdit}:id`,
}

export const navigationRoutes =  {
    moviesList: switchRoutes.moviesList,
    movieDetail: (id) => `${baseMovieDetail}${id}`,
    moviesCards: switchRoutes.movieCards,
    movieEdit: (id) => `${baseMovieEdit}${id}`,
}