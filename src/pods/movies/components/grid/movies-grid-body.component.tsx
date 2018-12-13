
import TableBody from "@material-ui/core/TableBody";
import * as React from "react";
import { MovieGridRowContent } from "./movies-grid-row.component";
import { MovieEntity } from "../../viewModel";

interface Props {
    movieList: MovieEntity[];
}

export const MovieGridBodyContent = (props: Props) => {
    const { movieList } = props;

    return (
        <TableBody>
            {movieList.map(movie => 
            <MovieGridRowContent movie={movie} key={movie.id} />
            )}
        </TableBody>
    );
}
