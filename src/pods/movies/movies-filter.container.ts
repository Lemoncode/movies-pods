import { connect } from 'react-redux';
import { MoviesFilterComponent } from './components';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
});

export const MoviesFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesFilterComponent);
