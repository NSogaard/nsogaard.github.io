import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

/*
 * The NavbarPortfolioOption ui element represents the buttons that will appear in a dropdown when hovered over (used for portfolios, hence the name)
 * 
 * Props: 
 * selectedPage = A state variable from index.js that tells us which page is selected (for navbar styling).
 * setSelectedPage = A state setter function from index.js that allows us to change the selected page styling for the navbar.
 * portfolioName = The name of the portfolio that the user will be redirected to if you click the button.
 * portfolioPath = The path that the visitor will be redirected to if they hit the button.
 * isActive = Tells us whether or not the given part of the website that is being linked to is 'active' (if it isn't it is greyed out and the user will
 * not be redirect anywhere if they click the button).
 */
const NavbarPortfolioOption = (props : {selectedPage : string, setSelectedPage : any, portfolioName : string, portfolioPath : string, isActive : boolean }) => {
    // Represents the action that will occur if you click the button (you are redirected to a new page in the website).
    const mouseDownAction = () => {
        if (props.isActive) {props.setSelectedPage(props.portfolioName)}
        console.log(props.selectedPage)
    }

    return(
        <Box onClick={mouseDownAction}>
            <Link className='navBarButton' to={(props.isActive) ? props.portfolioPath : ''}>
                <p
                    className={'portDropdownText ' + ((props.isActive) ? ' activePortfolio' : '') + ((props.selectedPage === props.portfolioName) ? ' selectedPortfolio' : '')}
                >
                    {props.portfolioName}
                </p>
            </Link>
        </Box>
    )
}

export default NavbarPortfolioOption;