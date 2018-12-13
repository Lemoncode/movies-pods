import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, CardMedia } from '@material-ui/core';
import { movieDetailsVM } from '../movie-detail.vm';

const styles = theme => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailTitle: {
        fontWeight: 'bold',
    },
    media: {
        height: '15rem',
        width: '10rem'
    },
    movieBody: {
        textAlign: 'justify',
        width: '90%'
    }
});

interface Props extends WithStyles<typeof styles> {
    movie: movieDetailsVM;
}

const MovieDetailsContentInner = (props: Props) => {

    return (
        <CardContent>
            <div className={props.classes.root}>
                <CardMedia
                    className={props.classes.media}
                    image={props.movie.posterUrl}
                    title={props.movie.title}
                />
                <div className={props.classes.movieBody}>
                    <Typography variant={'h6'}>Genre: </Typography>{props.movie.genre}

                    <Typography variant={'h6'}>Synopsis </Typography>
                    <Typography paragraph={true}>
                        <span>{props.movie.synopsis}</span>
                    </Typography>
                </div>
            </div>
        </CardContent>
    )
}

export const MovieDetailsContent = withStyles(styles)(MovieDetailsContentInner);

/*

<CardContent>
    <div className={props.classes.root}>
        <CardMedia
            className={props.classes.media}
            image={props.movie.posterUrl}
            title={props.movie.title}
        />

        <div className={props.classes.movieBody}>
            <div>
                <span className={props.classes.detailTitle}>Genre: </span>{props.movie.genre}
            </div>
            <Typography variant={'h6'}>Synopsis </Typography>
            <Typography paragraph={true}>
                <span>{props.movie.synopsis}</span>
            </Typography>
        </div>
    </div>
</CardContent>

    */