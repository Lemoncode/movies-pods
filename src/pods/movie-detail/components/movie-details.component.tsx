import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, CardMedia } from '@material-ui/core';
import { movieDetailsVM } from '../movie-detail.vm';
import { MovieDetailsContent } from './movie-details-content.component';
import { MovieActions } from './movie-details-actions.component';

const styles = theme => createStyles({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '100%',
        overflow: 'auto'
    },
    cardHeader: {
        fontWeight: 'bold'
    }
});

interface Props extends WithStyles<typeof styles> {
    movie: movieDetailsVM;
}

const MovieDetailsInner = (props: Props) =>
    <Card className={props.classes.root}>
        <CardHeader title={props.movie.title} className={props.classes.cardHeader} />
        <MovieDetailsContent movie={props.movie} />
        <MovieActions movie={props.movie} />
    </Card>

export const MovieDetails = withStyles(styles)(MovieDetailsInner);
