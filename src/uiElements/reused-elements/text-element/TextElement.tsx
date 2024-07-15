import { Grid } from '@mui/material';
import React from 'react';


/*
 * The TextElement ui element represents a text element in the website with a title, and text body (only really used in the 'About' page)
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * title = A title for the text element.
 * textBody = The main body of the text for the given element.
 * (top/bottom)Padding = Padding above and below the given text element.
 */
const TextElement = (props : { isLandscape : boolean, title : string, textBody : string, topPadding : number, bottomPadding : number }) => {

    return (
        <Grid container justifyContent='center'>
            <Grid container className='textElement' direction='column' xs={props.isLandscape ? 6 : 9} paddingBlockStart={props.topPadding} paddingBlockEnd={props.bottomPadding}>
                <Grid item className='teTitle'><h1>{props.title}</h1></Grid>
                <Grid item className='teBody'>{props.textBody}</Grid>
            </Grid>
        </Grid>
    )
}

export default TextElement;