import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from './flex-view.styles';

interface FlexViewProps extends WithStyles<typeof styles> {
};

const FlexViewInner: React.StatelessComponent<FlexViewProps> = (props) => (
  <div className={props.classes.container}>
    {props.children}
  </div>
);

export const FlexView = withStyles(styles)<FlexViewProps>(FlexViewInner);
