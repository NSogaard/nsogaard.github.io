import React from "react";
import Navbar from "../../reused_elements/navbar/Navbar.tsx";
import MiddleBar from "../../reused_elements/miscUi/MiddleBar.tsx";
import BottomBar from "../../reused_elements/miscUi/bottom_bar/BottomBar.tsx";
import { Grid } from "@mui/material";

const SWEPortfolio = (props : {isLandscape : boolean}) => {

    return(
        <div className='wrapperPage' style={{height: '100vh'}}>
            <Navbar />
            <section>
                <Grid className='topPage'>
                </Grid>       
                <BottomBar isLandscape={props.isLandscape} />
            </section>    
        </div>
    )
}

export default SWEPortfolio;