import React, { useEffect, useState } from 'react';
import Navbar from '../reused_elements/navbar/Navbar.tsx';
import './../styling/parentStyle.css'
import HelloThere from './HelloThere.tsx';
import TextElement from '../reused_elements/text_element/TextElement.tsx';
import loremIpsum from './../styling/loremIpsum.tsx';
import MiddleBar from '../reused_elements/miscUi/MiddleBar.tsx';
import { Grid } from '@mui/material';
import BottomBar from '../reused_elements/miscUi/bottom_bar/BottomBar.tsx';
import SkillsList from './skills-list/SkillsList.tsx';

const About = (props : { isLandscape : boolean }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return(
        <div className='wrapperPage'>
            <Navbar />
            <section>
                <Grid className='topPage' direction='column'>
                    <HelloThere isLandscape={props.isLandscape} />
                    <TextElement title="About" textBody={loremIpsum} isLandscape={props.isLandscape} topPadding={0} bottomPadding={0}/>
                </Grid>       
                <MiddleBar />
            </section>
            <section>
                <Grid className='topPage' direction='column'>
                    <SkillsList isLandscape={props.isLandscape}/>
                </Grid>
                <BottomBar isLandscape={props.isLandscape} />
            </section>      
        </div>
    )
}

export default About;