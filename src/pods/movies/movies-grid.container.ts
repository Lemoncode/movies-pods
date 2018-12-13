import { connect } from 'react-redux';
import { MoviesGridComponent } from './components';

import { moviesRequestAction } from './actions';
import { RootState } from '../../reducer';

const mapStateToProps = (state : RootState) => ({
  movieList : state.movies.moviesState.movies,
  totalResults : state.movies.moviesState.total,
})

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(moviesRequestAction()),
});

export const MoviesGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesGridComponent);