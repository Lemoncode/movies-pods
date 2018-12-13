import * as React from 'react'
import { WithStyles, withStyles, Button } from '@material-ui/core';
import { styles } from './filter-styles';
import { MovieFilter } from '../../viewModel';

interface Props extends WithStyles<typeof styles> {
    movieFilter: MovieFilter,
    onApplyFilter: (movieFilter : MovieFilter) => void,
}
const MoviesFilterApplyButtonComponentInner = (props : Props) => {

    const { classes } = props;

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => props.onApplyFilter(props.movieFilter)}
        >
        Apply filter
        </Button>
    
        )
    }

export const MoviesFilterApplyButtonComponent = withStyles(styles)(MoviesFilterApplyButtonComponentInner);