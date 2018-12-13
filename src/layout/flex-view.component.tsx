import * as React from 'react';
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles';
import styles from './flex-view.styles';
import { MovieAppBar } from './app-bar.component';


interface Props extends WithStyles<typeof styles> {

}

const FlexViewInner: React.StatelessComponent<Props> = (props) => (
  <>
  <MovieAppBar/>
  <div className={props.classes.container}>
    {props.children}
  </div>
  </>
);

export const FlexView = withStyles(styles)(FlexViewInner);
