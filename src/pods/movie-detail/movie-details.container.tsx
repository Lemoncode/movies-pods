import * as React from "react";
import { movieDetailsVM } from "./movie-detail.vm";
import { MovieDetails } from "./movie-details.component";
import { moviesAPI } from "../../api/movies-api";
import { MovieEntity } from "../../api/model";
import { mapFromMovieApiToMovieViewModel } from "./movie-details.mapper";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getMovieId } from "./movie-details.container.business";
import ErrorBoundary from "react-error-boundary";
import { ErrorBoundaryComponent } from "../../common-app/components/error-boundary.component";

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
        });
    }
    render() {
        return (
            <MovieDetails movie={this.state.movie} />
        )
    }
}
export const MovieDetailsContainer = withRouter<Props>(MovieDetailsContainerInner)