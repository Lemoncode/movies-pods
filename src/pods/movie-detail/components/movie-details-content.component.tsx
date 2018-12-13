import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, CardMedia } from '@material-ui/core';
import { movieDetailsVM } from '../movie-detail.vm';

const styles = theme => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        boxSizing:"border-box"
    },
    detailTitle: {
        fontWeight: 'bold',
    },
    media: {
        height: 'auto',
        flexBasis: '20%',
        backgroundRepeat: 'no-repeat',
        flexGrow: 1,
        minHeight:'332px',
        minWidth:'220px',
        boxSizing:"border-box"
    },
    movieBody: {
        textAlign: 'justify',
        flexBasis: '80%',
        padding: '1rem 3rem',
        flexGrow: 1,
        boxSizing:"border-box",
    }
});

interface Props extends WithStyles<typeof styles> {
    movie: movieDetailsVM;
}

const MovieDetailsContentInner = (props: Props) => {

    return (
        
        <CardContent>
            <div className={props.classes.root}>
                <div className={props.classes.media} style={{backgroundImage: `url(${props.movie.posterUrl})`}}/>
                <div className={props.classes.movieBody}>
                    <span style={{display:'flex', alignItems:'baseline'}}><Typography variant={'h6'}>Genre:</Typography>&nbsp;&nbsp;&nbsp;<Typography variant={'subheading'}>{props.movie.genre}</Typography></span>
                    <span style={{display:'flex', alignItems:'baseline'}}><Typography variant={'h6'}>Year:</Typography>&nbsp;&nbsp;&nbsp;<Typography variant={'subheading'}>{props.movie.year}</Typography></span>
                    <span style={{display:'flex', alignItems:'baseline'}}><Typography variant={'h6'}>Age rating:</Typography>&nbsp;&nbsp;&nbsp;<Typography variant={'subheading'}>{props.movie.ageRating}&nbsp; years</Typography></span>
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