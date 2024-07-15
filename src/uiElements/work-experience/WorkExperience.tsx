import React from 'react';
import Navbar from '../reused-elements/navbar/Navbar.tsx';
import BottomBar from '../reused-elements/bottom-bar/BottomBar.tsx';
import WorkExperienceList from './WorkExperienceList.tsx';
import { Grid } from '@mui/material';

/*
 * The WorkExperience ui element represents the 'Work Experience' page for the website. It is a parent page to all UI elements that
 * that page contains and is scrollable.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * selectedPage = A state variable from index.js that tells us which page is selected (for navbar styling).
 * setSelectedPage = A state setter function from index.js that allows us to change the selected page styling for the navbar.
 */
const WorkExperience = (props : {isLandscape : boolean, selectedPage : string, setSelectedPage : any}) => {

    return (
        <div className='wrapperPage' style={{height: '100vh'}}>
            <Navbar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
            <section>
                <Grid className='topPage'>
                    <WorkExperienceList isLandscape={props.isLandscape} />
                </Grid>
                <BottomBar isLandscape={props.isLandscape} />
            </section>      
        </div>
    )
}

export default WorkExperience;