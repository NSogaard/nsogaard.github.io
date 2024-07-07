import React, { useEffect, useState } from 'react';
import Image from 'mui-image';
import Grid, { GridSize } from '@mui/material/Grid/Grid.js'
import technologist from './../images/Technologist.png';
import { Box } from '@mui/material';
import './../styling/parentStyle.css'

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