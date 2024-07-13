import React from "react";
import Navbar from "../reused_elements/navbar/Navbar.tsx";
import './../styling/parentStyle.css'
import MiddleBar from "../reused_elements/miscUi/MiddleBar.tsx";
import BottomBar from "../reused_elements/miscUi/bottom_bar/BottomBar.tsx";
import PortfolioSelector from "./PortfolioSelector.tsx";
import { Grid } from "@mui/material";


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