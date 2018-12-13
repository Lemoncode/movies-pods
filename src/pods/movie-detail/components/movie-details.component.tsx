import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, CardMedia } from '@material-ui/core';
import { movieDetailsVM } from '../movie-detail.vm';
import { MovieDetailsContent } from './movie-details-content.component';

const styles = theme => createStyles({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '100%'
    },
    cardHeader: {
        fontWeight: 'bold'
    }
});

interface Props extends WithStyles<typeof styles> {
    movie: movieDetailsVM;
}

const MovieDetailsInner = (props: Props) => {

    return (

        <Card className={props.classes.root}>
            <CardHeader title={props.movie.title} className={props.classes.cardHeader}/>
            <MovieDetailsContent movie={props.movie}/>
        </Card>

    )
}

export const MovieDetails = withStyles(styles)(MovieDetailsInner);


/**
 * <Typography variant={'subtitle1'} style={{width:'3rem'}}>
                        <span className={props.classes.detailTitle}>Genre: </span>{props.movie.genre}
                    </Typography>

                    <Typography paragraph={true}  style={{width:'3rem'}}>
                        {props.movie.synopsis}
                    </Typography>
 */