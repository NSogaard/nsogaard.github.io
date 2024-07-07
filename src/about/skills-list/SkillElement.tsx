import { Grid } from "@mui/material";
import Image from "mui-image";
import React from "react";

const SkillElement = (props: {imagePath : string, skillName : string, isLandscape : boolean}) => {
    console.log()

    return (
        <Grid container className='skillElement' direction='column' xs={props.isLandscape ? 1.25 : 1.5 } alignItems='center'>
            <Grid item className='skillElementImageWrapper' xs={6}><Image src={props.imagePath} /></Grid>
            <Grid item><h2>{props.skillName}</h2></Grid>
        </Grid>
    )
}

export default SkillElement;