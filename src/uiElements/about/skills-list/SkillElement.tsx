import { Grid } from '@mui/material';
import Image from 'mui-image';
import React from 'react';

/*
 * The SkillElement ui element represents one of the 'skills' mentioned in the second part of the 'About' page.
 * it consists of an image and a piece of text that tells us what skill the image is supposed to represent.
 * 
 * Props:
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * imagePath = this is a URL to the image representing the given skill.
 * skillName = this is just the text that will appear below the image that tells us which skill the image is supposed to represent.
 */
const SkillElement = (props: {isLandscape : boolean, imagePath : string, skillName : string}) => {

    return (
        <Grid container direction='column' xs={props.isLandscape ? 1.25 : 1.5 } alignItems='center'>
            <Grid item className='skillElementImageWrapper' xs={6}><Image src={props.imagePath} /></Grid>
            <Grid item><h2>{props.skillName}</h2></Grid>
        </Grid>
    )
}

export default SkillElement;