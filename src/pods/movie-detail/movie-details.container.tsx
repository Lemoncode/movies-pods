import * as React from "react";
import { movieDetailsVM } from "./movie-detail.vm";
import { MovieDetails } from "./movie-details.component";
import { moviesAPI } from "../../api/movies-api";
import { MovieEntity } from "../../api/model";
import { mapFromMovieApiToMovieViewModel } from "./movie-details.mapper";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { MovieDetailsRootState } from "./reducers";
import { movieRequestStartAction } from "./actions";
import { connect } from "react-redux";
import { RootState } from "reducer";


/*
interface Props extends RouteComponentProps {
}

interface State {
    movie: movieDetailsVM;
}

class MovieDetailsContainerInner extends React.Component<Props, State> {
    state: State = { movie: { id: 0, ageRating: 0, genre: '', posterUrl: '', synopsis: '', title: '', year: 0 } }
    componentDidMount() {
        const movieId = getMovieId(this.props.location.pathname);
        moviesAPI.getMovieById(movieId).then((movie: MovieEntity) => {
            this.setState({ movie: mapFromMovieApiToMovieViewModel(movie) });
        }).catch();
    }
    render() {
        return (
            <MovieDetails movie={this.state.movie} />
        )
    }
}
export const MovieDetailsContainer = withRouter<Props>(MovieDetailsContainerInner)
*/
const mapStateToProps = (state : RootState) => ({
    movie: state.movieDetails.movieDetails
})

const mapDispatchToProps = (dispatch) => ({
    onload: (movieDetailsId : number) => dispatch(movieRequestStartAction(movieDetailsId)),

})

export const MovieDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);