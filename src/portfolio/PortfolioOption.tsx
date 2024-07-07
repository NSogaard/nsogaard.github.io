import { Grid, Link } from '@mui/material';
import Image from 'mui-image';
import React from 'react'

const PortfolioOption = (props : {portTitle : string, portDesc : string, portImgPath : string, portURLPath : string}) => {

    return(
        <Link href={'portfolio/' + props.portURLPath} style={{textDecoration: 'none', color: 'black'}}>
            <Grid container className='portfolioOptionWrapper' direction='column' justifyContent='center'>
                <Grid item className='portOptionImgWrapper' xs={3}><Image className='portOptionImg' src={props.portImgPath}/></Grid>
                <Grid container className='portOptionTextWrapper' xs={9} direction='column'>
                    <h2>{props.portTitle}</h2>
                    <p>{props.portDesc}</p>
                </Grid>
            </Grid>
        </Link>
    )
}

export default PortfolioOption;