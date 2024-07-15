import React from 'react';
import TextImageElement from '../reused-elements/text-image-element/TextImageElement.tsx';
import { Grid } from '@mui/material';
import BARelatedCW from './related-course-work/BARelatedCW.tsx';
import BCRelatedCW from './related-course-work/BCRelatedCW.tsx';

/*
 * The EducationList ui element represents a list of all of the formal education that I have complete / will complete (i.e. college
 * education / boot camps). It consists of two TextImageElements and appears in the first half of the 'EducationCertification' page.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * infoList = a list of information on each of the educations that will be displayed in this elements (in the form of a JSON).
 */
const EducationList = (props: {isLandscape : boolean, infoList : EduListInfo[]}) => {
    // A list of elements that will appear in the 'EducationList' based off of information from the 'EducationCertification' page.
    const educationElementList = props.infoList.map((element, index) => {

        return(
            <TextImageElement 
                title={element.title}
                subTitle={element.subTitle}
                imgPath={element.imgPath}
                relatedCW={element.title == 'B.A. at Case Western Reserve University (2020 - 2024)' ? <BARelatedCW /> : <BCRelatedCW />}
                hasDialog={true}
                isLandscape={props.isLandscape}
                height={25}
                isActive={true}                        
            />
        )
    })
    
    return(
        <Grid container className='educationList' direction='column' alignItems='center'>
            <h1>Education</h1>
            <Grid item container className='educationInnerList' justifyContent='center'>
                {educationElementList}
            </Grid>
        </Grid>
    )
}

interface EduListInfo {
    title : string,
    subTitle : string,
    imgPath : string
    topPadding : number,
    bottomPadding : number,
}

export { EducationList, EduListInfo }; 