import * as React from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { MovieGridHeadContent } from './grid/movies-grid-head.component';
import { MovieGridBodyContent } from './grid/movies-grid-body.component';
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
          minWidth: 700,
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
    setTimeout(() => {
      const movieList: MovieEntity[] = [
        { id: 0, title: 'Star wars', genre: 'fantasia', age_rating: 16, year: 1989 },
        { id: 1, title: 'Black Panther', genre: 'accion', age_rating: 18, year: 2017 },
        { id: 2, title: 'Señor de los anillos', genre: 'fantasia', age_rating: 18, year: 1989 },
        { id: 3, title: 'Jackass', genre: 'chusta', age_rating: 18, year: 1989 },
        { id: 4, title: 'Hobbit', genre: 'fantasia', age_rating: 8, year: 1989 },
        { id: 5, title: 'La torre oscura', genre: 'fantasia', age_rating: 10, year: 1989 },
        { id: 6, title: 'Jackass 2', genre: 'chusta', age_rating: 18, year: 1989 },
        { id: 7, title: 'Grid movie', genre: 'chusta', age_rating: 18, year: 1989 },
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