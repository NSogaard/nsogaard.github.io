import { Grid, Stack } from "@mui/material";
import React from "react";

const TextElement = (props : {title : string, textBody : string, isLandscape : boolean, topPadding : number, bottomPadding : number}) => {

    return (
        <Grid container justifyContent='center'>
            <Grid container className="textElement" direction='column' xs={props.isLandscape ? 6 : 9} paddingBlockStart={props.topPadding} paddingBlockEnd={props.bottomPadding}>
                <Grid item className="teTitle"><h1>{props.title}</h1></Grid>
                <Grid item className="teBody">{props.textBody}</Grid>
            </Grid>
        </Grid>
    )
}

export default TextElement;