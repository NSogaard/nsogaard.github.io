import React from 'react';
import TextImageElement from './text_image_element/TextImageElement.tsx';
import { Grid } from '@mui/material';
import BARelatedCW from './text_image_element/related-course-work/BARelatedCW.tsx';
import BCRelatedCW from './text_image_element/related-course-work/BCRelatedCW.tsx';

const EducationList = (props: {infoList : EduListInfo[], isLandscape : boolean}) => {
    const educationElementList = props.infoList.map((element, index) => {

        return(
            <TextImageElement 
                title={element.title}
                subTitle={element.subTitle}
                textBody={element.textBody}
                imgPath={element.imgPath}
                relatedCW={element.title == 'B.A. at Case Western Reserve University (2020 - 2024)' ? <BARelatedCW /> : <BCRelatedCW />}
                hasDialog={true}
                isLandscape={props.isLandscape}
                topPadding={element.topPadding}
                bottomPadding={element.bottomPadding}                        
            />
        )
    })

    // Maybe add functionality that allows the user to click on the element to access more information about
    // The given education type (location, skills learned, curriculum, relevant course work, etc.)
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
    textBody : string,
    imgPath : string
    topPadding : number,
    bottomPadding : number,
}

export { EducationList, EduListInfo }; 