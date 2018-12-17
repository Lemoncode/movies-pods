import * as React from 'react';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader } from '@material-ui/core';
import { movieDetailsVM } from './movie-detail.vm';
import { MovieDetailsContent } from './components/movie-details-content.component';
import { MovieActions } from './components/movie-details-actions.component';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const styles = theme => createStyles({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '100%',
        overflow: 'auto'
    },
    cardHeader: {
        fontWeight: 'bold'
    }
});

interface Props extends RouteComponentProps, WithStyles<typeof styles> {
    movie : movieDetailsVM;
    onload : (id: number) => void;
}

class MovieDetailsInner extends React.PureComponent<Props, {}> {
    getMovieId = (pathname): number => {
        const param = pathname.split("/");
        return parseInt(param[param.length-1]);
    }
    
    componentDidMount() {
        this.props.onload(this.getMovieId(this.props.location.pathname));
    }

    render() {
        const {classes, movie} = this.props;
        return(
            <Card className={classes.root}>
                <CardHeader title={movie.title} className={classes.cardHeader} />
                <MovieDetailsContent movie={movie} />
                <MovieActions movie={movie} />
            </Card>
        )
    
    }
}
    

export const MovieDetails = withStyles(styles)(withRouter<Props>(MovieDetailsInner));
