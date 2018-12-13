import * as React from 'react';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MovieFilter } from './view-model';
import { GenreEntity } from '../../../api/model';
import { genresAPI } from '../../../api/genres-api'
import { MoviesFilterTitleComponent } from './filters/movies-filter-title.component';
import { MoviesFilterGenreComponent } from './filters/movies-filter-genre.component';
import { MoviesFilterYearComponent } from './filters/movies-filter-year.component';
import { MoviesFilterApplyButtonComponent } from './filters/movies-filter-apply-button.component';
import { styles } from './filters/filter-styles';
import {
  createFormValidation, ValidationConstraints, Validators,
} from 'lc-form-validation';


interface Props extends WithStyles<typeof styles> {}

interface State {
  movieFilter: MovieFilter;
  genres: GenreEntity[];
}

class MoviesFilterComponentInner extends React.Component<Props, State> {

  state: State = {
    movieFilter: {
      title: '',
      genre: '',
      year: new Date().getFullYear().toString(),
    },
    genres: [],
  };

  componentDidMount() {
    genresAPI.getAllGenres().then((genres : GenreEntity[]) => {
      this.setState({
        genres
      });
    })
  }

  updateTitle = (title: string) =>
    this.setState({
      movieFilter: {
        ...this.state.movieFilter,
        title
      }
    });

  updateYear = (year: string) =>
    this.setState({
      movieFilter: {
        ...this.state.movieFilter,
        year
      }
    })

    updateGenre = (genre: string) =>
    this.setState({
      movieFilter: {
        ...this.state.movieFilter,
        genre
      }
    });

    applyFilter = () => {

    }

  render() {
    const { classes } = this.props;
    const { movieFilter } = this.state;
    return (
      <>
        <div className={classes.container}>

          <MoviesFilterTitleComponent title={movieFilter.title} onUpdateTitle={this.updateTitle}/>
          <MoviesFilterGenreComponent selectedGenre={movieFilter.genre} onChangeGenre={this.updateGenre} genresList={this.state.genres}/>
          <MoviesFilterYearComponent  year={movieFilter.year} onUpdateYear={this.updateYear}/>
          <MoviesFilterApplyButtonComponent movieFilter={movieFilter} onApplyFilter={this.applyFilter}/>
        </div>
      </>
    )
  }

}

export const MoviesFilterComponent = withStyles(styles)(MoviesFilterComponentInner);