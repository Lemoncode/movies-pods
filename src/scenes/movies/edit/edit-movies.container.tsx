import * as React from 'react';
import { EditMovie } from './edit-movies.component';
import { MovieEntity } from './view-model';

interface State {
    movieEntity: MovieEntity;
}

interface Props {

}

class EditMovieInner extends React.Component<Props, State> {


    onChangeField = (id,value) => {
        this.setState({
            movieEntity: {
                ...this.state.movieEntity,
                [id]: value,
            }
        })
    }




    state: State = {
        movieEntity: {
            id: 50,
            title: "vaya vaya...",
            genre: "chorra",
            age_rating: 7,
            year: 1979,
        }
    }
    render() {
        return (
            <>
                <EditMovie
                    movieEntity={this.state.movieEntity}
                    onChangeField={this.onChangeField}
                />
            </>
        )
    }
}

export const EditMovieContainer = (EditMovieInner);