import React from "react";
import Navbar from "../reused_elements/navbar/Navbar.tsx";
import BottomBar from "../reused_elements/miscUi/bottom_bar/BottomBar.tsx";
import WorkExperienceList from "./WorkExperienceList.tsx";
import { Grid } from "@mui/material";

const WorkExperience = (props : {isLandscape : boolean, selectedPage : string, setSelectedPage : any}) => {

    return (
        <div className='wrapperPage' style={{height: '100vh'}}>
            <Navbar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
            <section>
                <Grid className='topPage'>
                    <WorkExperienceList isLandscape={props.isLandscape} />
                </Grid>
                <BottomBar isLandscape={props.isLandscape} />
            </section>      
        </div>
    )
}

export default WorkExperience;