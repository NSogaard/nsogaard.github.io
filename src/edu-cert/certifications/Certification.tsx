import React from "react";
import { Grid } from "@mui/material";
import Image from "mui-image";
import Link from '@mui/material/Link';

const Certification = (props : {srcLogoPath : string, skillImgPath : string, certificateTitle : string, srcName : string, certLink : string, isLandscape : boolean}) => {
    const handleClick = () => {
        window.open(props.certLink, '_blank', 'noreferrer')
    }
    return(
        <Grid container className='certElement' xs={5} direction='row' onClick={handleClick}>           
                <Grid container className='certImageWrapper' xs={3} direction='column' alignItems='center'>
                    <img className='certImage' src={props.srcLogoPath} />
                    <img className='certImage' src={props.skillImgPath} style={{marginTop: '1vh'}}/>
                </Grid>
                <Grid container className='certText' xs={9} direction='column' justifyContent='center'>
                    <h3>{props.srcName}</h3>
                    <h4>{props.certificateTitle}</h4>
                </Grid>  
        </Grid>        
    )
}

interface CertificationInfo {
    srcLogoPath : string,
    skillImgPath : string,
    certificateTitle : string,
    srcName : string,
    certLink : string
}

export { Certification, CertificationInfo };