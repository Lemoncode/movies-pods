import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from './single-view.styles';
import { MovieAppBar } from './app-bar.component';

interface SingleViewProps extends WithStyles<typeof styles> {
};

const SingleViewInner: React.StatelessComponent<SingleViewProps> = (props) => (
  <>
  <MovieAppBar/>
  <div className={props.classes.container}>
    {props.children}
  </div>
  </>
);

export const SingleView = withStyles(styles)(SingleViewInner);


