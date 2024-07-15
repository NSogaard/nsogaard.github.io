import { Grid } from '@mui/material';
import React from 'react';

/*
 * The BCRelatedCW ui element is a part of a dialog element that appears when you click the 'TextImageElement' representing my boot camp education (i.e. my BC).
 * It contains all of the relevant / related course work that I completed (or will complete) during the boot camp.
 */
const BCRelatedCW = () => {

    return(
        <Grid container direction='row'>
            <Grid xs={6} alignContent='center'>
                <Grid>
                    <h4>Intermediate Excel</h4>
                    <p>Pivot Tables</p>
                    <p>VBA Scripting</p>
                </Grid>
                <Grid>
                    <h4>Fundamental Statistics</h4>
                    <p>Modeling</p>
                    <p>Forecasting</p>
                </Grid>
                <Grid>
                    <h4>Python Programming</h4>
                    <p>Python 3</p>
                    <p>NumPy</p>
                    <p>Pandas</p>
                    <p>Matplotlib</p>
                    <p>API Interactions</p>
                </Grid>
                <Grid>
                    <h4>Databases</h4>
                    <p>PostgreSQL/pgAdmin</p>
                    <p>MongoDB</p>
                    <p>Extract, Transform, Load (ETL)</p>
                </Grid>
            </Grid>
            <Grid xs={6}>
                <Grid>
                    <h4>Front–End Web Visualization</h4>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Bootstrap</p>
                    <p>Dashboarding</p>
                    <p>JavaScript Charting</p>
                    <p>Geomapping with Leaflet.js</p>
                </Grid>
                <Grid>
                    <h4>Business Intelligence Software</h4>
                    <p>Tableau</p>
                </Grid>
                <Grid>
                    <h4>Advanced Topics</h4>
                    <p>Big Data Analytics with Hadoop</p>
                    <p>Supervised Machine Learning</p>
                    <p>Unsupervised Machine Learning</p>
                    <p>Deep Learning</p>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BCRelatedCW;