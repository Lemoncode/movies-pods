import * as React from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, createStyles, WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MovieFilter, GeneresList } from '../viewModel';
import { render } from 'react-dom';

const styles = theme => createStyles({
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
  menu: {
    width: 300,
  },
});

interface Props extends WithStyles<typeof styles> {
  generes: GeneresList;
}

interface State {
  movieFilter: MovieFilter;
}

export class MoviesFilterComponentInner extends React.Component<Props, State> {

  state: State = {
    movieFilter: {
      title: '',
      genere: '',
      year: 2018,
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.container}>

          <TextField
            id="titleId"
            label="Title"
            margin="dense"
            className={classes.textField}
            value={this.state.movieFilter.title}
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
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Option 1</MenuItem>
            <MenuItem value={30}>Option 2</MenuItem>
            <MenuItem value={40}>Option 3</MenuItem>
            ))}
            </TextField>

          <TextField
            id="yearId"
            label="Year"
            className={classes.textField}
            value={this.state.movieFilter.year}
          />

        </div>
      </>
    )
  }

}

export const MoviesFilterComponent = withStyles(styles)(MoviesFilterComponentInner);