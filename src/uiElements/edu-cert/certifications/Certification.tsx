import React from 'react';
import { Grid } from '@mui/material';

/*
 * The Certification ui element represents one of the non-formal certifications that I have acquired from Codecademy. It consists of an image, and
 * title and when click will redirect the user to the pdf version of the certification that I got upon completing the given course. It appears in the
 * 'CertificationsList' element in the 'EducationCertification' page.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * srcLogoPath = This is a URL to an image representing the place where I got the certification (probably Codecademy).
 * skillImgPath = This is a URL to an image representing the skill that I learned when completing this certification.
 * certificateTitle = This is the title that will appear with the given certification in the element (they are directly from the course).
 * srcName = This is represents the name of the place that I got the given certification (again, probably Codecademy).
 * certLink = This is the shareable Google Drive link to my certification that allows a visitor to see the certification.
 */
const Certification = (props : {isLandscape : boolean, srcLogoPath : string, skillImgPath : string, certificateTitle : string, srcName : string, certLink : string}) => {
    // A function used to handle a redirect to a Google Drive link to the given certification.
    const handleClick = () => {
        window.open(props.certLink, '_blank', 'noreferrer')
    }
    
    return(
        <Grid container className='certElement' xs={5} direction='row' onClick={handleClick}>           
                <Grid container xs={3} direction='column' alignItems='center'>
                    <img className='certImage' src={props.srcLogoPath} />
                    <img className='certImage' src={props.skillImgPath} style={{marginTop: '1vh'}}/>
                </Grid>
                <Grid container xs={9} direction='column' justifyContent='center'>
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