import { Grid } from '@mui/material';
import React from 'react';
import TextImageElement from '../reused-elements/text-image-element/TextImageElement.tsx';

/*
 * The WorkExperienceList ui element represents the list of all of the different work experiences that I have completed. It contains
 * several 'TextImageElements' that tell us a bit about the experience, where the experience was at and what I did
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 */
const WorkExperienceList = (props : {isLandscape : boolean}) => {
    // A list of the information that is being displayed in this element (will be passed to the 'TextImageElements' through a map function)
    const weDetails : WorkExperienceDetails[] = [
        {
            weImagePath: 'https://media.licdn.com/dms/image/C4E0BAQG41LEE5NINKQ/company-logo_200_200/0/1630629503660/axon_networks_inc_logo?e=2147483647&v=beta&t=dYbfwAnEritseM8hZEWvpI8iGcHWw8wlsBmNmk0jL6w',
            weTitle: 'AXON Networks - Frontend Intern',
            weSubtitle : 'May 2023 - August 2023',
            weDesc:
            `
                In my role as a frontend intern at AXON Networks during the summer of 2023, I used React, Typescript, CSS, and HTML to create widgets that display critical
                infrastructure data on AXON Orchestrator, a customer-facing user interface. Most of the work that I completed consisted of debugging and tweaking already existing
                code and creating new widgets that pulled data from the company's back-end systems and displayed them on the customer dashboard. 
            `
        },
        {
            weImagePath: 'https://media.licdn.com/dms/image/C4E0BAQG41LEE5NINKQ/company-logo_200_200/0/1630629503660/axon_networks_inc_logo?e=2147483647&v=beta&t=dYbfwAnEritseM8hZEWvpI8iGcHWw8wlsBmNmk0jL6w',
            weTitle: 'AXON Networks - Software Engineering Intern (2022)',
            weSubtitle : 'May 2022 - August 2022',
            weDesc:
            `
                In my role as a software engineering intern at AXON Networks during the summer of 2022, I used Kotlin and Python to tweak and rebuild device simulators
                used to test back-end code and system infrastructure for expected customer load and added API endpoints for use in future widgets. Throughout the internship,
                I gained experience with handling the company's back-end systems, as well as experience creating internal apps by creating an internal tool with Jetpack Compose
                to control simulator behavior.
            `
        }
    ]

    // This functions generates the list of TextImageElements that will be displayed in this element.
    const weElements : JSX.Element[] = weDetails.map((element, index) => {
        return(
            <TextImageElement
                title={element.weTitle}
                subTitle={element.weSubtitle}
                textBody={element.weDesc}
                imgPath={element.weImagePath}
                hasDialog={true}
                isLandscape={props.isLandscape}
                height={25}
                isActive={true}
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