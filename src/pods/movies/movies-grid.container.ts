import { connect } from 'react-redux';
import { MoviesGridComponent } from './components';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
});

export const MoviesGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesGridComponent);