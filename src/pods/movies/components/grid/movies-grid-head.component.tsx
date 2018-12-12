import * as React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const MovieGridHead = () =>
<TableHead>
<TableRow>
  <TableCell>Movie</TableCell>
  <TableCell align="right">Genre</TableCell>
  <TableCell align="right">Age rating</TableCell>
  <TableCell align="right">Year</TableCell>
</TableRow>
</TableHead>