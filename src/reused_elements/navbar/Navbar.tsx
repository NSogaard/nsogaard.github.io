import React from 'react';
import NavbarButton from './NavbarButton.tsx';
import Grid from '@mui/material/Grid/Grid.js'
import './../../styling/parentStyle.css'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const portfolioOptions = () : JSX.Element[] => {
        const portfolioOptionsList = [
            {
                portfolioName : 'Software Engineering Portfolio',
                portfolioPath : '/portfolio/SWEPortfolio',
                isActive : true
            },
            {
                portfolioName : 'Data Analytics Portfolio (TBD)',
                portfolioPath : '/portfolio/DAPortfolio',
                isActive : false
            }
        ]

        return (
            portfolioOptionsList.map((element, index) => {
                return(
                    <Box className='portDropdown '>
                        <Link className='navBarButton' to={(element.isActive) ? element.portfolioPath : ''}>
                            <p className={'portDropdownText ' + ((element.isActive) ? 'activePortfolio' : '')}>{element.portfolioName}</p>
                        </Link>
                    </Box>
                )
            })
        )
        
    }

    return (
        <Grid container className='navBar' columnSpacing={3} justifyContent='center'>
            <Grid item><NavbarButton buttonName="About" buttonPath="" isDropdown={false}/></Grid>
            <Grid item><NavbarButton buttonName="Education and Certifications" buttonPath="edu&cert" isDropdown={false}/></Grid>
            <Grid item><NavbarButton buttonName="Work Experience" buttonPath="workexp" isDropdown={false}/></Grid>
            <Grid item><NavbarButton buttonName="Portfolio" buttonPath="portfolio" isDropdown={true} dropdownOptions={portfolioOptions()}/></Grid>
        </Grid>
    )
}


export default Navbar;