import * as React from 'react';
import { CardContent, Typography, Card } from '@material-ui/core';

export const ErrorBoundaryComponent = ({ componentStack, error }) =>
    <Card>
        <CardContent>
        <Typography paragraph={true} variant={'h1'}>Oops! An error occured!</Typography>
        <Typography paragraph={true} variant={'subtitle1'}>Here’s what we know…</Typography>
        <Typography paragraph={true} variant={'subtitle2'}><strong>Error:</strong> {error.toString()}</Typography>
        <Typography paragraph={true} variant={'subtitle2'}><strong>Stacktrace:</strong> {componentStack}</Typography>
        </CardContent>
    </Card>
