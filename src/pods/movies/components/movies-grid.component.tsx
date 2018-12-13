import * as React from 'react';
import {TablePagination, Table} from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import { MovieGridHeadContent } from './grid/movies-grid-head.component';
import { MovieGridBodyContent } from './grid/movies-grid-body.component';
import { MovieEntity } from '../viewModel';
import { moviesAPI, Options } from '../../../api/movies-api';
import { mapFromMovieApiToMovieViewModel, mapFromMovieCollectionVMToMovieViewModel } from '../mapper';
import { settings } from '../../../common-app';

interface PropsInner {
  movieList: MovieEntity[];
  totalResults : number;
  onChangePage : (event: object, page: number) => void;
  page : number
}

const MoviesGridComponentInner = (props: PropsInner) => {

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
        <TablePagination component="div" style={{ textAlign: "right"}} rowsPerPageOptions={[settings.pageSize]} rowsPerPage={settings.pageSize} page={props.page} count={props.totalResults} onChangePage={props.onChangePage}></TablePagination>
        
        
    </Paper>
  );
}

interface State {
  actualPage: number;
}

interface Props {
  load : () => void;
  movieList: MovieEntity[];
  totalResults: number;
}

export class MoviesGridComponent extends React.Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      actualPage : 1,
    }
  }

  componentDidMount() {
    this.props.load();
  }

  onChangePage = (event: object, page: number) => {
    const options : Options = {
      pageIndex:this.mapFromTablePageIndexToApiPageIndex(page),
      pageSize:settings.pageSize,
      filter: undefined,
    }
    const movieList = moviesAPI.getAllMovies(options).then(
      movieList => this.setState( {
        actualPage : page,
      })
    );
  }

  mapFromTablePageIndexToApiPageIndex = (page:number) : number => {
    return page+1
  } 
  render() {
    return (
      <MoviesGridComponentInner movieList={this.props.movieList} onChangePage={this.onChangePage} page={this.state.actualPage} totalResults={this.props.totalResults} />
    )
  }
}