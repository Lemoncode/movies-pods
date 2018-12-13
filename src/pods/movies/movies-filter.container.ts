import { connect } from 'react-redux';
import { MoviesFilterComponent } from './components/movies-filter.component';
import { moviesRequestAction } from './actions';
import { MovieFilter } from './viewModel';
import { State } from '../../core/store/model';


const mapStateToProps = (state : State) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
    applyFilter: (movieFilter : MovieFilter) => dispatch(moviesRequestAction(movieFilter)),

})

export const MoviesFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesFilterComponent);