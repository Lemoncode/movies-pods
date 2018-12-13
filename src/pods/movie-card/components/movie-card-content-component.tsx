import * as React from 'react';
import { createStyles, WithStyles, CardContent, CardMedia, Typography, withStyles } from '@material-ui/core';
import { MovieEntity } from '../view-Model';

const styles = theme => createStyles({
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  });

interface Props extends WithStyles<typeof styles>{
    movie:MovieEntity;
}

const CardContentComponentInner = (props: Props) =>
    <CardContent>
        <div style=
            {{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
            <CardMedia
                className={props.classes.media}
                image={props.movie.posterUrl}
                title={props.movie.title}
            />
            <Typography variant="subtitle1" gutterBottom>
                {props.movie.synopsis}
            </Typography>
        </div>
    </CardContent>

export const CardContentComponent = withStyles(styles)((CardContentComponentInner));