import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MovieEntity } from "./view-model";

const styles = () => createStyles({
  textFieldClass: {
      display: "block",
      width:'400px',
  },
});

interface Props extends WithStyles<typeof styles> {
  movieEntity: MovieEntity;
  onChangeField: (fieldId: string, value) => void;
}

const onTextFieldChange = (fieldId: string, onChangeField) => (e) =>
  onChangeField(fieldId, e.target.value);

const EditMovieInner = (props: Props) =>
  <>
    <Typography variant="h5" component="h3">Edit Movie</Typography>
    <form >
      <TextField
        className={props.classes.textFieldClass}
        id="title"
        label="Title"
        value={props.movieEntity.title}
        margin="normal"
        onChange={onTextFieldChange('title', props.onChangeField)}
      />
      <TextField
        className={props.classes.textFieldClass}
        id="genre"
        label="Genre"
        value={props.movieEntity.genre}
        margin="normal"
        onChange={onTextFieldChange('genre', props.onChangeField)}
      />
      <TextField
        className={props.classes.textFieldClass}
        id="age_rating"
        label="Age rating"
        value={props.movieEntity.age_rating}
        margin="normal"
        onChange={onTextFieldChange('age_rating', props.onChangeField)}
      />
      <TextField
        className={props.classes.textFieldClass}
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