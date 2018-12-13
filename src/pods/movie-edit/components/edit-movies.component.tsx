import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MovieEntity } from "../view-model";
import {MoviesFilterGenreComponent} from '../../movies/components/filters/movies-filter-genre.component';
import { GenreEntity } from '../../../api/model';
const styles = theme => ({
  textField: {
      display: "flex",
      width:"80%",
  },
  container: {
    width:'300px'
  }
});

interface Props extends WithStyles<typeof styles> {
  movieEntity: MovieEntity;
  onChangeField: (fieldId: string, value) => void;
  genresList: GenreEntity[];
  selecteGenres:string;

}

const onTextFieldChange = (fieldId: string, onChangeField) => (e) =>
  onChangeField(fieldId, e.target.value);

const EditMovieInner = (props: Props) =>
  <>
    <Typography variant="h5" component="h3">Edit Movie</Typography>
    <form className={props.classes.container}>

      <TextField
        className={props.classes.textField}
        id="title"
        label="Title"
        value={props.movieEntity.title}
        margin="normal"
        onChange={onTextFieldChange('title', props.onChangeField)}
      />
      <MoviesFilterGenreComponent selectedGenre={props.selecteGenres} onChangeGenre={onTextFieldChange('title', props.onChangeField)} genresList={props.genresList}/>
      <TextField
        className={props.classes.textField}
        id="genre"
        label="Genre"
        value={props.movieEntity.genre}
        margin="normal"
        onChange={onTextFieldChange('genre', props.onChangeField)}
      />
      <TextField
        className={props.classes.textField}
        id="age_rating"
        label="Age rating"
        value={props.movieEntity.age_rating}
        margin="normal"
        onChange={onTextFieldChange('age_rating', props.onChangeField)}
      />
      <TextField
        className={props.classes.textField}
        id="year"
        label="Year"
        value={props.movieEntity.year}
        margin="normal"
        onChange={onTextFieldChange('year', props.onChangeField)}
      />
      <Button variant="outlined" type="submit" value="Save">Save</Button>
    </form>
  </>

export const EditMovie = withStyles(styles)(EditMovieInner)