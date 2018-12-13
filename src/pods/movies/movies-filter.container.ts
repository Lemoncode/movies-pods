import { connect } from 'react-redux';
import { State } from './reducer/filter';
import { MoviesFilterComponent } from './components/movies-filter.component';
import { MovieFilter } from './components/view-model';
import { moviesRequestAction } from './actions';


const mapStateToProps = (state : State) => ({
})

const mapDispatchToProps = (dispatch) => ({
    applyFilter: (movieFilter : MovieFilter) => dispatch(moviesRequestAction(movieFilter)),

})

export const MoviesFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesFilterComponent);