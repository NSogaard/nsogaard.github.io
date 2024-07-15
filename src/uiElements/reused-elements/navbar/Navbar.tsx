import React from 'react';
import NavbarButton from './NavbarButton.tsx';
import Grid from '@mui/material/Grid/Grid.js'

/*
 * The Navbar ui element represents the navigation bar that appears at the top of the screen. It allows users to jump between parts of the website
 * and will bold and darken whichever page is currently selected.
 * 
 * Props: 
 * selectedPage = A state variable from index.js that tells us which page is selected (for navbar styling).
 * setSelectedPage = A state setter function from index.js that allows us to change the selected page styling for the navbar.
 */
const Navbar = (props : { selectedPage : string, setSelectedPage : any}) => {

    return (
        <Grid container className='navBar' columnSpacing={3} justifyContent='center'>
            <Grid item><NavbarButton buttonName="About" buttonPath="" isDropdown={false} selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} /></Grid>
            <Grid item><NavbarButton buttonName="Education and Certifications" buttonPath="edu&cert" isDropdown={false} selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} /></Grid>
            <Grid item><NavbarButton buttonName="Work Experience" buttonPath="workexp" isDropdown={false} selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} /></Grid>
            <Grid item><NavbarButton buttonName="Portfolio" buttonPath="portfolio" isDropdown={true} selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} /></Grid>
        </Grid>
    )
}


export default Navbar;