import * as React from 'react'
import { TextField, WithStyles, withStyles } from '@material-ui/core';
import { styles } from './filter-styles';

interface Props extends WithStyles<typeof styles> {
    year: string,
    onUpdateYear: (year : string) => void,
}
const MoviesFilterYearComponentInner = (props : Props) => {

    const { classes } = props;

    return (
        <TextField
            id="yearId"
            label="Year"
            className={classes.textField}
            value={props.year}
            onChange={(event) => props.onUpdateYear(event.target.value)}
          />
    
        )
    }

export const MoviesFilterYearComponent = withStyles(styles)(MoviesFilterYearComponentInner);