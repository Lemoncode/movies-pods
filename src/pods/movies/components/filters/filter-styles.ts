import { createStyles } from "@material-ui/core/styles";

export const styles = theme => createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      marginRight: '30px',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginBottom: theme.spacing.unit,
      width: 300,
    },
    dense: {
      marginTop: 19,
    },
    button: {
      margin: theme.spacing.unit,
      width: 150,
    },
    input: {
      display: 'none',
    },
  });