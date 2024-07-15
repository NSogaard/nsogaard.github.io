import React from 'react';
import Navbar from '../reused-elements/navbar/Navbar.tsx';
import BottomBar from '../reused-elements/bottom-bar/BottomBar.tsx';
import PortfolioSelector from './PortfolioSelector.tsx';
import { Grid } from '@mui/material';

/*
 * The Portfolio ui element represents the 'Portfolio' page for the website. It is a parent page to all UI elements that
 * that page contains and is scrollable.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * selectedPage = A state variable from index.js that tells us which page is selected (for navbar styling).
 * setSelectedPage = A state setter function from index.js that allows us to change the selected page styling for the navbar.
 */
const Portfolio = (props : {isLandscape : boolean, selectedPage : string, setSelectedPage : any}) => {
    
    return (
        <div className='wrapperPage' style={{height: '100vh'}}>
            <Navbar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage}/>
            <section>
                <Grid className='topPage'>
                    <PortfolioSelector isLandscape={props.isLandscape} setSelectedPage={props.setSelectedPage} />
                </Grid>
                <BottomBar isLandscape={props.isLandscape} />
            </section>      
        </div>
    )
}

export default Portfolio;