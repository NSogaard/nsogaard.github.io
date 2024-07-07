import React from "react";
import Navbar from "../reused_elements/navbar/Navbar.tsx";
import BottomBar from "../reused_elements/miscUi/bottom_bar/BottomBar.tsx";
import WorkExperienceList from "./WorkExperienceList.tsx";
import { Grid } from "@mui/material";

const WorkExperience = (props : {isLandscape : boolean}) => {

    return (
        <div className='wrapperPage' style={{height: '100vh'}}>
            <Navbar />
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