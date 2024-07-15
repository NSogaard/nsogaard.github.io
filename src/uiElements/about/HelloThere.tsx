import React from 'react';
import Image from 'mui-image';
import Grid from '@mui/material/Grid/Grid.js';
import technologist from './../../images/Technologist.png';

/*
 * The HelloThere ui element represents the image on the home screen that starts with 'Hello there!'. It
 * just contains an image of an emoji and some text.
 * 
 * Props:
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 */
const HelloThere = (props : {isLandscape : boolean}) => {

    return(
        <Grid container justifyContent='center'>
            <Grid item className='helloThere' xs={props.isLandscape ? 3 : 6}>
                <p>Hello there! I am</p>
                <p className='boldName'>Niels Sogaard</p>
                <p style={{lineHeight: '25%'}}>Software Engineer &</p>
                <p style={{lineHeight: '25%'}}>Data Analyst</p>
            </Grid>
            <Grid item xs={props.isLandscape ? 1.5 : 3}>
                <Image src={technologist} />
            </Grid>
        </Grid>
    )
}

export default HelloThere;