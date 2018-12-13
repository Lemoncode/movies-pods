import * as React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { MovieGridHead } from './grid/movies-grid-head.component';
import { MovieGridBody } from './grid/movies-grid-body.component';
import { MovieEntity } from './view-model';

interface Props {
  movieList: MovieEntity[];
}

const MoviesGridComponentInner = (props: Props) => {
  return (
    <Paper >
      <Table >
        <MovieGridHead />
        <MovieGridBody movieList={props.movieList} />
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
    setTimeout(() => {
      const movieList: MovieEntity[] = [
        { id: 0, title: 'Star wars', genre: 'chusta', age_rating: 16, year: 1989 },
        { id: 1, title: 'Black Panther', genre: 'chusta', age_rating: 18, year: 2017 },
        { id: 2, title: 'Star wars', genre: 'chusta', age_rating: 16, year: 1989 },
      ];
      this.setState({ movieList });
    }, 500);
  }

  render() {
    return (
      <MoviesGridComponentInner movieList={this.state.movieList} />
    )
  }
}