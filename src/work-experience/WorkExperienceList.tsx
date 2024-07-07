import { Grid } from '@mui/material';
import React from 'react';
import loremIpsum from '../styling/loremIpsum.tsx';
import TextImageElement from '../edu-cert/text_image_element/TextImageElement.tsx';
import BARelatedCW from '../edu-cert/text_image_element/related-course-work/BARelatedCW.tsx';

const WorkExperienceList = (props : {isLandscape : boolean}) => {
    const weDetails : WorkExperienceDetails[] = [
        {
            weImagePath: 'https://media.licdn.com/dms/image/C4E0BAQG41LEE5NINKQ/company-logo_200_200/0/1630629503660/axon_networks_inc_logo?e=2147483647&v=beta&t=dYbfwAnEritseM8hZEWvpI8iGcHWw8wlsBmNmk0jL6w',
            weTitle: 'AXON Networks - Frontend Intern',
            weSubtitle : 'May 2023 - August 2023',
            weDesc: loremIpsum
        },
        {
            weImagePath: 'https://media.licdn.com/dms/image/C4E0BAQG41LEE5NINKQ/company-logo_200_200/0/1630629503660/axon_networks_inc_logo?e=2147483647&v=beta&t=dYbfwAnEritseM8hZEWvpI8iGcHWw8wlsBmNmk0jL6w',
            weTitle: 'AXON Networks - Software Engineering Intern (2022)',
            weSubtitle : 'May 2022 - August 2022',
            weDesc: loremIpsum
        }
    ]

    const weElements : JSX.Element[] = weDetails.map((element, index) => {
        return(
            <TextImageElement
                title={element.weTitle}
                subTitle={element.weSubtitle}
                textBody={element.weDesc}
                imgPath={element.weImagePath}
                relatedCW={<BARelatedCW />}
                hasDialog={true}
                isLandscape={props.isLandscape}
                topPadding={0}
                bottomPadding={0}
            />
        )
    })

    return(
        <Grid container className='weListWrapper' direction='column' alignItems='center'>
            <h1>Work Experience</h1>
            <Grid item container className='weListWrapperElements' justifyContent='center'>
                {weElements}
            </Grid>
        </Grid>
    )
}

interface WorkExperienceDetails {
    weImagePath : string, 
    weTitle : string, 
    weSubtitle : string,
    weDesc : string
}

export default WorkExperienceList;