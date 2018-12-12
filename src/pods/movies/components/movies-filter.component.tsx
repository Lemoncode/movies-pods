import * as React from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, createStyles, WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

interface Props extends WithStyles<typeof styles> {

}

const MoviesFilterComponentInner = (props: Props) => {

    const {classes} = props;
    
    return (
      <>
        <div className={classes.container}>

          <TextField
            id="titleId"
            label="Title"
            margin="dense"
            className={classes.textField}
          />


          <TextField
            id="standard-select-currency"
            select
            label="Genere"
            className={classes.textField}
            //onChange={this.handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
            ))}
          </TextField>

          <TextField
            id="yearId"
            label="Year"
            className={classes.textField}
          />

        </div>
      </>
    )
}

export const MoviesFilterComponent = withStyles(styles)(MoviesFilterComponentInner);