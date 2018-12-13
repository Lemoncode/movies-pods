import * as React from 'react';
import { FlexView, SingleView } from '../layout';
import { MoviesFilterContainer, MoviesGridContainer } from '../pods/movies';

const applyFilter = () => null

export const SceneMovieList: React.StatelessComponent = () => 
 <FlexView>
    <MoviesFilterContainer/>
    <MoviesGridContainer />
  </FlexView>