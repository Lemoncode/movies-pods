import * as React from 'react';
import { CardHeader, Avatar, IconButton, WithStyles, createStyles } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MovieEntity } from '../view-Model';
import { red } from '@material-ui/core/colors';

const styles = theme => createStyles({
    card: {
      width: '500px',
      marginTop: '10px',
    },
    avatar: {
      backgroundColor: red[500],
    },  
  });

interface Props extends WithStyles<typeof styles> {
    movie: MovieEntity;
}

const CardHeaderComponentInner = (props: Props) =>
    <CardHeader
        avatar={
            <Avatar aria-label="Movie" className={props.classes.avatar}>
                {props.movie.title}
            </Avatar>
        }
        action={
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        }
        title={props.movie.title}
        subheader={props.movie.genre}
    />
