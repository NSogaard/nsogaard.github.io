import { Grid } from '@mui/material';
import React from 'react';

/*
 * The MiddleBar ui element represents the bar that appears at the bottom of every page that is not the final page in the page.
 * It is a simple dashed line.
 */
const MiddleBar = () => {

    return (
        <Grid container justifyContent='center'>
            <Grid item xs={8}><div className='middleBar'/></Grid>
        </Grid>
    )
}

export default MiddleBar;