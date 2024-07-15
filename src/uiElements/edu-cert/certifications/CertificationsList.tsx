import { Grid } from '@mui/material';
import React from 'react';
import { Certification, CertificationInfo } from './Certification.tsx';

/*
 * The CertificationList ui element represent a list of all of the certifications that I have gained from non-formal sources (i.e. not from a university). 
 * A list of certifications is passed in from 'EducationCertification' and it is displayed here. It appears in the second part of the 'EducationCertification'
 * page.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * certList = A list of the information that will be displayed in each 'Certification' element in the list.
 */
const CertificationsList = (props : { isLandscape : boolean, certList : CertificationInfo[] } ) => {
    // A list that contains all of the certifications that will appear in the CertificationList. The information is supplied
    // From the certificationListInfo element in 'EducationCertification'.
    const certElements = props.certList.map((element, index) => {

        return (
            <Certification
                srcLogoPath={element.srcLogoPath}
                skillImgPath={element.skillImgPath}
                certificateTitle={element.certificateTitle}
                srcName={element.srcName}
                certLink={element.certLink}
                isLandscape={props.isLandscape}
            />
        )
    })

    return (
        <Grid container className='certListWrapper' xs={props.isLandscape ? 6 : 9} justifyContent='center'>
            <h1>Certifications</h1>
            <Grid container rowGap={5} columnGap={5} justifyContent='space-evenly'>
                {certElements}
            </Grid>
        </Grid>
    )
}

export default CertificationsList;