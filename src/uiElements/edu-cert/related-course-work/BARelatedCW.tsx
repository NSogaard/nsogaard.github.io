import { Grid } from '@mui/material';
import React from 'react';

/*
 * The BARelatedCW ui element is a part of a dialog element that appears when you click the 'TextImageElement' representing my college education (i.e. my BA).
 * It contains all of the relevant / related course work that I completed during my undergraduate degree.
 */
const BARelatedCW = () => {

    return(
        <Grid>
            <Grid>
                <h4>Computer Science</h4>
                <p>CSDS 345 - Programming Language Concepts</p>
                <p>CSDS 341 - Introduction to Database Systems</p>
                <p>CSDS 338 - Introduction to Operating Systems and Concurrent Programming</p>
                <p>CSDS 310 - Algorithms</p>
                <p>CSDS 337 - Compiler Design</p>
                <p>CSDS 233 - Introduction to Data Structures</p>
                <p>CSDS 281 - Logic Design and Computer Organization</p>
                <p>CSDS 132 - Programming in Java</p>
            </Grid>
            <Grid>
                <h4>Stats and Economics</h4>
                <p>STAT 312 - Basic Statistics for Engineering and Science (R)</p>
                <p>ECON 216 - Data Visualization in R</p>
            </Grid>
        </Grid>
    )
}

export default BARelatedCW;