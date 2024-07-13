import React, { Dispatch, SetStateAction } from 'react';
import NavbarButton from './NavbarButton.tsx';
import Grid from '@mui/material/Grid/Grid.js'
import './../../styling/parentStyle.css'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

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