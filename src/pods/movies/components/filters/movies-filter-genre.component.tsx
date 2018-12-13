import * as React from 'react'
import { TextField, WithStyles, withStyles, MenuItem } from '@material-ui/core';
import { styles } from './filter-styles';
import { GenreEntity } from '../../viewModel';

interface Props extends WithStyles<typeof styles> {
    selectedGenre: string,
    genresList: GenreEntity[],
    onChangeGenre: (title : string) => void,
}
const MoviesFilterGenreComponentInner = (props : Props) => {

    const { classes } = props;

    return (
        <TextField
            id="standard-select-currency"
            select
            value='-1'
            label="Genre"
            className={classes.textField}
            onChange={(event) => props.onChangeGenre(event.target.value)}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            <MenuItem value={-1}>All</MenuItem>
            {
              props.genresList.map((genre: GenreEntity) =>
                <MenuItem key={genre.id} value={genre.id}>{genre.desc}</MenuItem>
              )
            }
            ))}
            </TextField>
    
        )
    }

export const MoviesFilterGenreComponent = withStyles(styles)(MoviesFilterGenreComponentInner);