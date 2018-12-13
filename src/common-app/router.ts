const baseMovieDetail = '/movie-details/'; 
const baseMovieEdit = '/movies/edit/'; 


export const switchRoutes = {
    moviesList: '/',
    movieDetail: `${baseMovieDetail}:id`,
    movieEdit:`${baseMovieEdit}:id`,
}

export const navigationRoutes =  {
    moviesList: switchRoutes.moviesList,
    movieDetail: (id) => `${baseMovieDetail}:${id}`,
    movieEdit: (id)=>`${baseMovieEdit}:${id}`,
}