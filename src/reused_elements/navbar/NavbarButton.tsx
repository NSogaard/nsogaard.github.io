import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from './NBButtonInfo';
import { Box } from '@mui/material';
import NavbarPortfolioOption from './NavbarPortfolioOption.tsx';

const NavbarButton = (props: {buttonName: string, buttonPath: string, isDropdown : boolean, selectedPage : string, setSelectedPage : any}) => {
    const [dropdown, setDropdown] = useState(false);
    const dropdownExists = props.isDropdown;

    const mouseOverAction = () => {
        setDropdown(props.isDropdown)
    }

    const mouseOutAction = () => {
        setDropdown(false)
    }

    const mouseDownAction = () => {
        props.setSelectedPage(props.buttonName)
        console.log(props.selectedPage)
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