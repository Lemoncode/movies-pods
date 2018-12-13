import * as React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { MovieGridHeadContent } from './grid/movies-grid-head.component';
import { MovieGridBodyContent } from './grid/movies-grid-body.component';
import { moviesAPI } from '../../../api/movies-api';
import { mapFromMovieApiToMovieViewModel, mapFromMovieCollectionVMToMovieViewModel } from '../mapper';
import { MovieEntity } from './view-model';

interface Props {
  movieList: MovieEntity[];
}

const MoviesGridComponentInner = (props: Props) => {

  return (
    <Paper style=
      {{
        width: '100%',
        marginTop: '5%',
        overflowX: 'auto',
      }}>
      <Table style=
        {{
          minWidth: 500,
        }}>
        <MovieGridHeadContent />
        <MovieGridBodyContent movieList={props.movieList} />
      </Table>
    </Paper>
  );
}

interface State {
  movieList: MovieEntity[];
}

export class MoviesGridComponent extends React.Component<{}, State> {

  constructor(props) {
    super(props);

    this.state = {
      movieList: []
    }
  }

  componentDidMount() {
    const movieList = moviesAPI.getAllMovies().then(
      movieList => this.setState( {movieList: mapFromMovieCollectionVMToMovieViewModel(movieList)})
    );
  }

  render() {
    return (
      <MoviesGridComponentInner movieList={this.state.movieList} />
    )
  }
}