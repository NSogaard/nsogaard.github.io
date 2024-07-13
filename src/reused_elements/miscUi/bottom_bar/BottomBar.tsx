import { Grid } from "@mui/material";
import React from "react";
import ContactsBar from "./ContactsBar.tsx";

const BottomBar = (props : {isLandscape : boolean}) => {

    return (
        <Grid container className='bottomBarWrapper' alignItems='center'>
            <Grid item xs={ props.isLandscape ? 5.25 : 4.5 }><div className="bottomBar"/></Grid>
            <Grid item xs={ props.isLandscape ? 1.5 : 3 }><ContactsBar /></Grid>
            <Grid item xs={ props.isLandscape ? 5.25 : 4.5 }><div className="bottomBar"/></Grid>
        </Grid>
    )
}

export default BottomBar;