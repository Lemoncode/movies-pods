import * as React from 'react';
import { EditMovie } from './edit-movies.component';
import { MovieEntity } from './view-model';
import { withStyles } from '@material-ui/core';
import { GenreEntity } from '../../../api/model';

interface State {
    movieEntity: MovieEntity;
    genresList: GenreEntity[];
    selecteGenres:string;    
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
        },
        selecteGenres:'a',
        genresList:[{id:'a',desc: 'alfa'},{id:'b',desc: 'beta'}]
            
        
    }
    render() {
        return (
            <>
                <EditMovie
                    movieEntity={this.state.movieEntity}
                    onChangeField={this.onChangeField}
                    selecteGenres='a'
                    genresList={this.state.genresList}


                />
            </>
        )
    }
}

export const EditMovieContainer =(EditMovieInner);