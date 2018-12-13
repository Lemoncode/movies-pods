
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as React from "react";
import { MovieEntity } from "../../viewModel";

interface Props {
    movieList: MovieEntity[];
}

export const MovieGridBody = (props: Props) => {
    return (
        <TableBody>
            {props.movieList.map(movie => {
                return (
                    <TableRow key={movie.id}>
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
