import { connect } from 'react-redux';
import { State } from './reducer/filter';
import { MoviesFilterComponent } from './components/movies-filter.component';
import { moviesRequestAction } from './actions';
import { MovieFilter } from './viewModel';


const mapStateToProps = (state : State) => ({
})

const mapDispatchToProps = (dispatch) => ({
    applyFilter: (movieFilter : MovieFilter) => dispatch(moviesRequestAction(movieFilter)),

})

export const MoviesFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesFilterComponent);