import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = () => createStyles({
    tableHead: {
        backgroundColor: 'white',
    },
    tableCellStyle: {
        color: '#06c',
        fontSize: '1rem',
    },
});

interface Props extends WithStyles<typeof styles> {
}

export const MovieGridHeadContentInner = (props: Props) => {
    const { classes } = props;
    return (
        <TableHead className={classes.tableHead} >
            <TableRow >
                <TableCell className={classes.tableCellStyle}>Movie</TableCell>
                <TableCell className={classes.tableCellStyle}>Genre</TableCell>
                <TableCell className={classes.tableCellStyle}>Age rating</TableCell>
                <TableCell className={classes.tableCellStyle}>Year</TableCell>
            </TableRow>
        </TableHead >
    )
}

export const MovieGridHeadContent = withStyles(styles)(MovieGridHeadContentInner)