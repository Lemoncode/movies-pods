
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as React from "react";
import { MovieEntity } from "../view-model";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

interface Props extends WithStyles<typeof styles> {
    movieList: MovieEntity[];
}

const styles = () => createStyles({
    movie: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#fafafa',
        },
      },
});

export const MovieGridBodyContentInner = (props: Props) => {
    const { classes,movieList } = props;
    return (
        <TableBody>
            {movieList.map(movie => {
                return (
                    <TableRow className={classes.movie} key={movie.id}>
                        <TableCell component="th" scope="row">
                            {movie.title}
                        </TableCell>
                        <TableCell align="right">{movie.genre}</TableCell>
                        <TableCell align="right">{movie.age_rating}</TableCell>
                        <TableCell align="right">{movie.year}</TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
}

export const MovieGridBodyContent = withStyles(styles)(MovieGridBodyContentInner)
