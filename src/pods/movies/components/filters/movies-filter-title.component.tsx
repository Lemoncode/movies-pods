import * as React from 'react'
import { TextField, WithStyles, withStyles } from '@material-ui/core';
import { styles } from './filter-styles';

interface Props extends WithStyles<typeof styles> {
    title: string,
    onUpdateTitle: (genre : string) => void,
}
const MoviesFilterTitleComponentInner = (props : Props) => {

    const { classes } = props;

    return (
        <TextField
            id="titleId"
            label="Title"
            margin="dense"
            className={classes.textField}
            value={props.title}
            onChange={(event) => props.onUpdateTitle(event.target.value)}
        />
    
        )
    }

export const MoviesFilterTitleComponent = withStyles(styles)(MoviesFilterTitleComponentInner);