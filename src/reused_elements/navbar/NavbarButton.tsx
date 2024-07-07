import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonInfo from './NBButtonInfo';
import { Box } from '@mui/material';

const NavbarButton = (props: {buttonName: string, buttonPath: string, isDropdown : boolean, dropdownOptions? : JSX.Element[] }) => {
    const [dropdown, setDropdown] = useState(false);
    const dropdownExists = props.dropdownOptions !== undefined;

    const mouseOverAction = () => {
        setDropdown(props.isDropdown)
    }

    const mouseOutAction = () => {
        setDropdown(false)
    }

    const dropdownElement = () => {
        if (!(dropdown && dropdownExists)) { return <div></div> }
        else {
            return(
                <div className='navbarDropdown'>
                    {props.dropdownOptions}
                </div>
            )
        }
    }

    return(
        <Box onMouseLeave={mouseOutAction}>
            <Link className='navBarButton' to={`/${props.buttonPath}`}>
                <div 
                    className={dropdown ? 'navBarButtonUnderline dropdown' : 'navBarButtonUnderline'}
                    onMouseOver={mouseOverAction}
                >
                    {props.buttonName}
                </div>
            </Link>
            {dropdownElement()}
        </Box>
    )
    
}

export default NavbarButton;