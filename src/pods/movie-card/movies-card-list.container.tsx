import { connect } from 'react-redux';
import { MovieCardList } from './components';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
});

export const MoviesCardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieCardList);