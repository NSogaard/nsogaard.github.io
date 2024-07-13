import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavbarPortfolioOption = (props : { portfolioName : string, portfolioPath : string, isActive : boolean, selectedPage : string, setSelectedPage : any}) => {
    const mouseDownAction = () => {
        if (props.isActive) {props.setSelectedPage(props.portfolioName)}
        console.log(props.selectedPage)
    }

    return(
        <Box className='portDropdown' onClick={mouseDownAction}>
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