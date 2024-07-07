import { Grid } from '@mui/material';
import React from 'react';
import { Certification, CertificationInfo } from './Certification.tsx';

const CertificationsList = (props : {certList : CertificationInfo[], isLandscape : boolean}) => {
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
            <Grid container rowGap={5} columnGap={5}  justifyContent='space-evenly'>
                {certElements}
            </Grid>
        </Grid>
    )
}

export default CertificationsList;