import * as React from 'react';
import { createStyles, Card, WithStyles, CardHeader, withStyles } from '@material-ui/core';
import { MovieEntity } from "../view-model";
import { CardHeaderComponent } from './movie-card-header-component';
import { CardContentComponent } from './movie-card-content-component';

const styles = theme => createStyles({
    card: {
        width: '500px',
        marginTop: '10px',
    },
});

interface Props extends WithStyles<typeof styles> {
    movie: MovieEntity;
}

const MovieCardInner = (props: Props) => {
    return (
        <Card className={props.classes.card}>
            <CardHeaderComponent movie={props.movie} />
            <CardContentComponent movie={props.movie}/>
        </Card>
    )
}

export const MovieCard = withStyles(styles)(MovieCardInner);