import * as React from 'react';
import { FlexView } from '../layout/flex-view.component';
import { MoviesFilterContainer, MoviesGridContainer } from '../pods/movies';

export const SceneMovieList: React.StatelessComponent = () => 
  <FlexView>
    <MoviesFilterContainer />
    <MoviesGridContainer />
  </FlexView>