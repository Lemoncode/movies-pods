import * as React from 'react';
import { WithStyles, AppBar, Toolbar, IconButton, Typography, Button, withStyles } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { switchRoutes } from '../common-app/router';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

interface Props extends RouteComponentProps,WithStyles<typeof styles> {

}

class MovieAppBarInner extends React.Component<Props> {

    navigateToCards=() =>{
        this.props.history.push(switchRoutes.movieCards)
    }

    render(){
        return (
    <div className={this.props.classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
           </IconButton>
        <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
          MyMovies
          </Typography>
        <Button color="inherit" onClick= {this.navigateToCards} >Cards</Button>
      </Toolbar>
    </AppBar>
  </div>
  )}
}

export const MovieAppBarStyle = withStyles(styles)(MovieAppBarInner);
export const MovieAppBar = withRouter(MovieAppBarStyle);