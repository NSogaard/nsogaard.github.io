import { Grid } from "@mui/material";
import React from "react";

const MiddleBar = () => {

    return (
        <Grid container justifyContent='center'>
            <Grid item xs={8}><div className="middleBar"/></Grid>
        </Grid>
    )
}

export default MiddleBar;