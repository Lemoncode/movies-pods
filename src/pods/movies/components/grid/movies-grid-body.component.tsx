
import TableBody from "@material-ui/core/TableBody";
import * as React from "react";
import { MovieEntity } from "../view-model";
import { MovieGridRowContent } from "./movies-grid-row.component";

interface Props {
    movieList: MovieEntity[];
}

export const MovieGridBodyContent = (props: Props) => {
    const { movieList } = props;

    return (
        <TableBody>
            {movieList.map(movie => 
            <MovieGridRowContent movie={movie} />
            )}
        </TableBody>
    );
}
