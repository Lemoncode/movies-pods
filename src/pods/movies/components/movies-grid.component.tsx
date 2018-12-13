import * as React from 'react';
import {TablePagination, Table} from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import { MovieGridHeadContent } from './grid/movies-grid-head.component';
import { MovieGridBodyContent } from './grid/movies-grid-body.component';
import { MovieEntity } from '../viewModel';
import { moviesAPI, Options } from '../../../api/movies-api';
import { mapFromMovieApiToMovieViewModel, mapFromMovieCollectionVMToMovieViewModel } from '../mapper';
import { settings } from '../../../common-app';

interface Props {
  movieList: MovieEntity[];
  totalResults : number;
  onChangePage : (event: object, page: number) => void;
  page : number
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
        <TablePagination style={{ textAlign: "right"}} rowsPerPageOptions={[settings.pageSize]} rowsPerPage={settings.pageSize} page={props.page} count={props.totalResults} onChangePage={props.onChangePage}></TablePagination>
    </Paper>
  );
}

interface State {
  movieList: MovieEntity[];
  actualPage: number;
  totalResults: number;

}

export class MoviesGridComponent extends React.Component<{}, State> {

  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      actualPage : 1,
      totalResults : 0,
    }
  }

  componentDidMount() {
    const options : Options = {
      pageIndex:1,
      pageSize:settings.pageSize
    }
    const movieList = moviesAPI.getAllMovies(options).then(
      movieList => this.setState( {
        movieList: mapFromMovieCollectionVMToMovieViewModel(movieList.movies),
        actualPage : 0,
        totalResults : movieList.total
      })
    );
  }

  onChangePage = (event: object, page: number) => {
    const options : Options = {
      pageIndex:this.mapFromTablePageIndexToApiPageIndex(page),
      pageSize:settings.pageSize
    }
    const movieList = moviesAPI.getAllMovies(options).then(
      movieList => this.setState( {
        movieList: mapFromMovieCollectionVMToMovieViewModel(movieList.movies),
        actualPage : page,
        totalResults : movieList.total
      })
    );
  }

  mapFromTablePageIndexToApiPageIndex = (page:number) : number => {
    return page+1
  } 
  render() {
    return (
      <MoviesGridComponentInner movieList={this.state.movieList} onChangePage={this.onChangePage} page={this.state.actualPage} totalResults={this.state.totalResults} />
    )
  }
}