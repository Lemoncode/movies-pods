import * as React from 'react';
import { FlexView, SingleView } from '../layout';
import { MoviesFilterContainer, MoviesGridContainer } from '../pods/movies';
import { MovieDetailsContainer } from '../pods/movie-detail/movie-details.container';

export const SceneMovieDetails: React.StatelessComponent = () => 
 <SingleView>
    <MovieDetailsContainer />
  </SingleView>