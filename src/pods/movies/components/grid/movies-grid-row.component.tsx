import { MovieEntity } from "../view-model";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as React from "react";
import { Link } from "react-router-dom";

interface Props extends WithStyles<typeof styles> {
    movie: MovieEntity;
}

const styles = () => createStyles({
    movie: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#fafafa',
        },
    },
});

export const MovieGridRowContentInner = (props: Props) => {
    const { classes, movie } = props;

    return (
        <TableRow className={classes.movie} key={movie.id}>
            <TableCell component="th" scope="row">
                <Link to={`/movie-details/:${movie.id}`}>{movie.title}</Link>
            </TableCell>
            <TableCell align="right">{movie.genre}</TableCell>
            <TableCell align="right">{movie.age_rating}</TableCell>
            <TableCell align="right">{movie.year}</TableCell>
        </TableRow>
    );
}

export const MovieGridRowContent = withStyles(styles)(MovieGridRowContentInner)