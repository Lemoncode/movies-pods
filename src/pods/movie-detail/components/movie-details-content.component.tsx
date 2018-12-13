import * as React from 'react';
import { CardContent } from '@material-ui/core';
import { movieDetailsVM } from '../movie-detail.vm';
import { MovieDetailsBody } from './movie-details-body.component';

interface Props {
    movie: movieDetailsVM;
}

export const MovieDetailsContent = (props: Props) =>
    <CardContent>
        <MovieDetailsBody movie={props.movie} />
    </CardContent>
