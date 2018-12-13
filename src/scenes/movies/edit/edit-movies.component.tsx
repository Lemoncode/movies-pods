import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {MovieEntity } from "./view-model";

interface Props {
  movieEntity: MovieEntity;
  onChangeField:(fieldId:string, value)=>void;
}

const onTextFieldChange = (fieldId : string, onChangeField) => (e) =>
  onChangeField(fieldId, e.target.value);

export const EditMovie = (props: Props) =>
  <div>
    <Typography variant="h5" component="h3">Edit Movie</Typography>
    <form >
      <TextField
        id="title"
        label="Title"
        value={props.movieEntity.title}
        margin="normal"
        style={{ minWidth: "100px", display: "block" }}
        onChange={onTextFieldChange('title', props.onChangeField)}
      />
      <TextField
        id="genre"
        label="Genre"
        value={props.movieEntity.genre}
        margin="normal"
        style={{ minWidth: "200px", display: "block" }}
        onChange={onTextFieldChange('genre', props.onChangeField)}

      />
      <TextField
        id="age_rating"
        label="Age rating"
        value={props.movieEntity.age_rating}
        margin="normal"
        style={{ minWidth: "100px", display: "block" }}
        onChange={onTextFieldChange('age_rating', props.onChangeField)}

      />
      <TextField
        id="year"
        label="Year"
        value={props.movieEntity.year}
        margin="normal"
        style={{ minWidth: "100px", display: "block" }}
        onChange={onTextFieldChange('year', props.onChangeField)}

      />
      <Button variant="outlined" type="submit" value="Save">Save</Button>
    </form>
  </div>