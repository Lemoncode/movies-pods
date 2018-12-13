import * as React from 'react'
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from './filter-styles';
import { TextFieldForm } from './textFieldForm';
import { LoginFormErrors } from '../../viewModel';

interface Props extends WithStyles<typeof styles> {
    year: string;
    onUpdateYear: (string, any) => void;
    loginFormErrors: LoginFormErrors;
}
const MoviesFilterYearComponentInner = (props: Props) => {

    const { classes, loginFormErrors, onUpdateYear } = props;

    return (
        <TextFieldForm
            name="year"
            label="Year"
            className={classes.textField}
            value={props.year}
            onChange={onUpdateYear}
            type="text"
            error={loginFormErrors.year.errorMessage}
        />
    );
}

export const MoviesFilterYearComponent = withStyles(styles)(MoviesFilterYearComponentInner);