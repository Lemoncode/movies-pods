import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MovieEntity } from '../view-model/movie';
import { MoviesGridContainer } from '../movies-grid.container';

interface Props {
  movieList: MovieEntity[];
}

const MoviesGridComponentInner = (props: Props) => {
  return (
    <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Movie</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Age rating</TableCell>
            <TableCell align="right">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.movieList.map(movie => {
            return (
              <TableRow key={movie.id}>
                <TableCell component="th" scope="row">
                  {movie.title}
                </TableCell>
                <TableCell align="right">{movie.genre}</TableCell>
                <TableCell align="right">{movie.age_rating}</TableCell>
                <TableCell align="right">{movie.year}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
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
    const movieList:MovieEntity[] = [
        {id:0,title:'Star wars',genre:'chusta', age_rating:16, year:1989},
        {id:1,title:'Star wars',genre:'chusta', age_rating:16, year:1989},
        {id:2,title:'Star wars',genre:'chusta', age_rating:16, year:1989},
      ];
    this.setState({movieList})
  }

  render() {
    return (
      <MoviesGridComponentInner movieList={this.state.movieList} />
    )
  }
}
/*
export const MoviesGridComponent = () =>
  <h3>Hello from Movies MoviesGridComponent</h3>*/