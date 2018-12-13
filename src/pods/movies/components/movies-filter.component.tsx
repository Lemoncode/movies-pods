import * as React from 'react';
import { TextField, MenuItem, createStyles, WithStyles, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { MovieFilter, GenresList } from '../view-model';
import { GenreEntity } from '../../../api/model';
import { genresAPI } from '../../../api/genres-api'

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
  button: {
    margin: theme.spacing.unit,
    width: 150,
  },
  input: {
    display: 'none',
  },
});

interface Props extends WithStyles<typeof styles> {
  onApplyFilter: (movieFilter: MovieFilter) => void;
}

interface State {
  movieFilter: MovieFilter;
  genres: GenreEntity[];
}

export class MoviesFilterComponentInner extends React.Component<Props, State> {

  state: State = {
    movieFilter: {
      title: '',
      genre: '',
      year: 2018,
    },
    genres: [],
  };

  componentDidMount() {
    genresAPI.getAllGenres().then((genres : GenreEntity[]) => {
      this.setState({
        genres
      });
    })
  }

  updateTitle = (title: string) =>
    this.setState({
      movieFilter: {
        ...this.state.movieFilter,
        title
      }
    });

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
            onChange={(event) => this.updateTitle(event.target.value)}
          />

          <TextField
            id="standard-select-currency"
            select
            value='-1'
            label="Genre"
            className={classes.textField}
            //onChange={this.handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            <MenuItem value={-1}>All</MenuItem>
            {
              this.state.genres.map((genre: GenreEntity) =>
                <MenuItem value={genre.id}>{genre.desc}</MenuItem>
              )
            }
            ))}
            </TextField>

          <TextField
            id="yearId"
            label="Year"
            className={classes.textField}
            value={this.state.movieFilter.year}
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => this.props.onApplyFilter(this.state.movieFilter)}
          >
            Apply filter
          </Button>

        </div>
      </>
    )
  }

}

export const MoviesFilterComponent = withStyles(styles)(MoviesFilterComponentInner);