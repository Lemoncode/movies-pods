import * as React from 'react';
import { createStyles, Card, WithStyles, CardHeader, withStyles } from '@material-ui/core';
import { MovieEntity } from "../view-model";

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
            // add card header
        </Card>

    )
}


export const MovieCard = withStyles(styles)(MovieCardInner);