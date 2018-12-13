import * as React from "react";
import { movieDetailsVM } from "./movie-detail.vm";
import { MovieDetails } from "./movie-details.component";
import { moviesAPI } from "../../api/movies-api";
import { MovieEntity } from "../../api/model";
import { mapFromMovieApiToMovieViewModel } from "./movie-details.mapper";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { State } from "./reducers";
import { movieRequestStartAction } from "./actions";
import { connect } from "react-redux";


/*
interface Props extends RouteComponentProps {
}

interface State {
    movie: movieDetailsVM;
}

const getMovieId = (pathname): number => {
    const param = pathname.split("/");
    return parseInt(param[param.length-1]);
}
class MovieDetailsContainerInner extends React.Component<Props, State> {
    state: State = { movie: { id: 0, ageRating: 0, genre: '', posterUrl: '', synopsis: '', title: '', year: 0 } }
    componentDidMount() {
        const movieId = getMovieId(this.props.location.pathname);
        moviesAPI.getMovieById(movieId).then((movie: MovieEntity) => {
            this.setState({movie: mapFromMovieApiToMovieViewModel(movie)});
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
const mapStateToProps = (state : State) => ({
    movie: state.movieDetails
})

const mapDispatchToProps = (dispatch) => ({
    onload: (movieDetailsId : number) => dispatch(movieRequestStartAction(movieDetailsId)),

})

export const MovieDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);