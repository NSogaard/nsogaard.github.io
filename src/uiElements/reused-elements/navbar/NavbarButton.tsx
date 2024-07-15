import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import NavbarPortfolioOption from './NavbarPortfolioOption.tsx';

/*
 * The NavbarButton ui element represents each individual button in the navigation bar. The excess of code in this file exists
 * to allow the button to either function as a dropdown (for the portfolio pages) or just as a regular button.
 * 
 * Props: 
 * selectedPage = A state variable from index.js that tells us which page is selected (for navbar styling).
 * setSelectedPage = A state setter function from index.js that allows us to change the selected page styling for the navbar.
 * buttonName = A string that represents the text that will appear for the button in the navigation bar.
 * buttonPath = A string that represents the path that the user will be redirected to if you click the button.
 * isDropdown = A boolean that tells us whether or not the given button is a dropdown menu.
 */
const NavbarButton = (props: {selectedPage : string, setSelectedPage : any, buttonName: string, buttonPath: string, isDropdown : boolean}) => {
    // Records whether or not the button is a dropdown, and (if it is), whether or not it is currently being hovered over.
    const [dropdown, setDropdown] = useState(false);
    // Tells us whether or not a dropdown exists for this button.
    const dropdownExists = props.isDropdown;

    // This function represents the action that occurs when someone hovers over a dropdown menu in the navbar (it sets 'dropdown' to true if the button is a dropdown).
    const mouseOverAction = () => {
        setDropdown(props.isDropdown)
    }

    // This function represents the action that occurs when someone stops hovering over a dropdown menu in the navbar (it sets 'dropdown' to false).
    const mouseOutAction = () => {
        setDropdown(false)
    }

    // This function represents the action that happens when you click a button in the navbar (it sets the current 'selectedPage' to the current page).
    const mouseDownAction = () => {
        props.setSelectedPage(props.buttonName)
    }

    return(
        <Box onMouseLeave={mouseOutAction}>
            <Link className='navBarButton' to={`/${props.buttonPath}`}>
                <div 
                    className={'navBarButtonUnderline' + ( dropdown ? ' dropdown' : '' )}
                    onMouseOver={mouseOverAction}
                    onClick={mouseDownAction}
                    style={{color: `${(props.selectedPage.includes(props.buttonName)) ? 'black' : ''}` }}  
                >
                    {props.buttonName}
                </div>
            </Link>
            {
                (dropdown && dropdownExists) ?
                    <div className='navbarDropdown'>
                        <NavbarPortfolioOption
                            portfolioName='Software Engineering Portfolio'
                            portfolioPath='/portfolio/SWEPortfolio'
                            isActive={true}
                            selectedPage={props.selectedPage}
                            setSelectedPage={props.setSelectedPage}
                            />
                        <NavbarPortfolioOption
                            portfolioName='Data Analytics Portfolio (TBD)'
                            portfolioPath='/portfolio/DAPortfolio'
                            isActive={false}
                            selectedPage={props.selectedPage}
                            setSelectedPage={props.setSelectedPage}
                        />
                    </div>
                :
                    <div></div>
            }
        </Box>
    )
    
}

export default NavbarButton;