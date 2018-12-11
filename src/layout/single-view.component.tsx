import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from './single-view.styles';

interface SingleViewProps extends WithStyles<typeof styles> {
};

const SingleViewInner: React.StatelessComponent<SingleViewProps> = (props) => (
  <div className={props.classes.container}>
    {props.children}
  </div>
);

export const SingleView = withStyles(styles)<SingleViewProps>(SingleViewInner);
