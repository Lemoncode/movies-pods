import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as React from "react";
import { Link } from "react-router-dom";
import { switchRoutes, navigationRoutes } from "../../../../common-app/router";
import { MovieEntity } from "../../viewModel";

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
        <TableRow className={classes.movie} >
            <TableCell component="td" scope="row">
                <Link to={navigationRoutes.movieDetail(movie.id)}>{movie.title}</Link>
            </TableCell>
            <TableCell align="right">{movie.genre}</TableCell>
            <TableCell align="right">{movie.ageRating}</TableCell>
            <TableCell align="right">{movie.year}</TableCell>
        </TableRow>
    );
}

export const MovieGridRowContent = withStyles(styles)(MovieGridRowContentInner)