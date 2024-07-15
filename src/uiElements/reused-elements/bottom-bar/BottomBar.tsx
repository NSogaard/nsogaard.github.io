import { Grid } from '@mui/material';
import React from 'react';
import ContactsBar from './ContactsBar.tsx';

/*
 * The BottomBar ui element represents the bar that appears at the end of every page that demarcates that the page has ended
 * and contains contact information for me.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 */
const BottomBar = (props : {isLandscape : boolean} ) => {

    return (
        <Grid container className='bottomBarWrapper' alignItems='center'>
            <Grid item xs={ props.isLandscape ? 5.25 : 4.5 }><div className='bottomBar'/></Grid>
            <Grid item xs={ props.isLandscape ? 1.5 : 3 }><ContactsBar /></Grid>
            <Grid item xs={ props.isLandscape ? 5.25 : 4.5 }><div className='bottomBar'/></Grid>
        </Grid>
    )
}

export default BottomBar;