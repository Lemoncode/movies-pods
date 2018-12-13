import * as React from 'react';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MovieFilter, LoginFormErrors, createDefaultLoginFormErrors } from './view-model';
import { GenreEntity } from '../../../api/model';
import { genresAPI } from '../../../api/genres-api'
import { MoviesFilterTitleComponent } from './filters/movies-filter-title.component';
import { MoviesFilterGenreComponent } from './filters/movies-filter-genre.component';
import { MoviesFilterYearComponent } from './filters/movies-filter-year.component';
import { MoviesFilterApplyButtonComponent } from './filters/movies-filter-apply-button.component';
import { styles } from './filters/filter-styles';
import { yearValidation } from './filters/year-validation';

interface Props extends WithStyles<typeof styles> {
 }

interface State {
  movieFilter: MovieFilter;
  genres: GenreEntity[];
  loginFormErrors: LoginFormErrors;
}

class MoviesFilterComponentInner extends React.Component<Props, State> {

  state: State = {
    movieFilter: {
      title: '',
      genre: '-1',
      year: new Date().getFullYear().toString(),
    },
    genres: [],
    loginFormErrors: createDefaultLoginFormErrors(),
  };

  componentDidMount() {
    genresAPI.getAllGenres().then((genres: GenreEntity[]) => {
      this.setState({
        genres
      });
    })
  }

  updateField = (fieldId: string) => (value: string) => {
    this.setState({
      movieFilter: {
        ...this.state.movieFilter,
        [fieldId]: value
      }
    });
  }

  updateYear = (name: string, value) => {
    this.setState({
      movieFilter: {
        ...this.state.movieFilter,
        [name]: value
      }
    });

    yearValidation.validateField(this.state.movieFilter, name, value).then(
      (fieldValidationResult) => {
        this.setState({
          loginFormErrors: {
            ...this.state.loginFormErrors,
            [name]: fieldValidationResult,
          }
        });        
      }
    );
  }

  applyFilter = () => {
    yearValidation
      .validateForm(this.state.movieFilter)
      .then((validationResult) => {
        if (validationResult.succeeded) {
          // TODO: apply filter
          console.log("Year is valid");
        } else {
          console.log('Year invalid');
          // this.setState();
        }
      });
  }

  render() {

    const { classes } = this.props;
    const { movieFilter } = this.state;

    return (
      <>
        <div className={classes.container}>

          <MoviesFilterTitleComponent 
            title={movieFilter.title} 
            onUpdateTitle={this.updateField('title')} 
          />

          <MoviesFilterGenreComponent 
            selectedGenre={movieFilter.genre} 
            onChangeGenre={this.updateField('genre')} 
            genresList={this.state.genres} 
          />

          <MoviesFilterYearComponent 
            year={movieFilter.year} 
            onUpdateYear={this.updateYear} 
            loginFormErrors={this.state.loginFormErrors}
          />

          <MoviesFilterApplyButtonComponent 
            movieFilter={movieFilter} 
            onApplyFilter={this.applyFilter} 
          />

        </div>
      </>
    )
  }

}

export const MoviesFilterComponent = withStyles(styles)(MoviesFilterComponentInner);