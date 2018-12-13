import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { CardActions, IconButton } from '@material-ui/core';
import { movieDetailsVM } from '../movie-detail.vm';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


const styles = theme => createStyles({
    actions: {
        display: 'flex'
    }
});

interface Props extends WithStyles<typeof styles> {
    movie: movieDetailsVM;
}

const MovieActionsInner = (props: Props) => {
    const { classes } = props;
    return (
        <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites" onClick={() => { alert(props.movie.title + ' Added as a favorite') }}>
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share" onClick={() => { alert(props.movie.title + ' shared') }}>
                <ShareIcon />
            </IconButton>
        </CardActions>

    )
}

export const MovieActions = withStyles(styles)(MovieActionsInner);