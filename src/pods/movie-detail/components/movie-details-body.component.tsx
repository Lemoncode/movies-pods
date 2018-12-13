import * as React from 'react';
import { Typography, WithStyles, createStyles, withStyles } from '@material-ui/core';
import { movieDetailsVM } from '../movie-detail.vm';

const styles = theme => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        boxSizing: "border-box"
    },
    detailTitle: {
        fontWeight: 'bold',
    },
    media: {
        height: 'auto',
        flexBasis: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexGrow: 1,
        minHeight: '332px',
        minWidth: '220px',
        boxSizing: "border-box",
    },
    movieBody: {
        textAlign: 'justify',
        flexBasis: '80%',
        padding: '1rem 3rem',
        flexGrow: 1,
        boxSizing: "border-box",
    }
});

interface Props extends WithStyles<typeof styles> {
    movie: movieDetailsVM;
}
interface InternalProps {
    type: string;
    value: any;
}

const MovieDetailsSubtitle = (props: InternalProps) =>

    <span style={{ display: 'flex', alignItems: 'baseline' }}>
        <Typography variant={'h6'}>{props.type}</Typography>&nbsp;&nbsp;&nbsp;
        <Typography variant={'subheading'}>{props.value}</Typography>
    </span>


const MovieDetailsSynopsis = (props: InternalProps) =>
    <>
        <Typography variant={'h6'}>{props.type} </Typography>
        <Typography paragraph={true}><span>{props.value}</span></Typography>
    </>

const MovieDetailsBodyInner = (props: Props) =>
    <div className={props.classes.root}>
        <div className={props.classes.media} style={{ backgroundImage: `url(${props.movie.posterUrl})` }} />
        <div className={props.classes.movieBody}>
            <MovieDetailsSubtitle type={'Genre:'} value={props.movie.genre} />
            <MovieDetailsSubtitle type={'Year:'} value={props.movie.year} />
            <MovieDetailsSubtitle type={'Age rating:'} value={`${props.movie.ageRating} years`} />
            <MovieDetailsSynopsis type={'Synopsis'} value={props.movie.synopsis} />
        </div>
    </div>

export const MovieDetailsBody = withStyles(styles)(MovieDetailsBodyInner)