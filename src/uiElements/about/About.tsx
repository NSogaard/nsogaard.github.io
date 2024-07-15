import React, {useEffect } from 'react';
import Navbar from '../reused-elements/navbar/Navbar.tsx';
import HelloThere from './HelloThere.tsx';
import TextElement from '../reused-elements/text-element/TextElement.tsx';
import { Grid } from '@mui/material';
import SkillsList from './skills-list/SkillsList.tsx';
import MiddleBar from '../reused-elements/middle-bar/MiddleBar.tsx';
import BottomBar from '../reused-elements/bottom-bar/BottomBar.tsx';


/*
 * The About ui element represents the 'About' page for the website. It is a parent page to all UI elements that
 * that page contains and is scrollable.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * selectedPage = A state variable from index.js that tells us which page is selected (for navbar styling).
 * setSelectedPage = A state setter function from index.js that allows us to change the selected page styling for the navbar.
 */
const About = (props : { isLandscape : boolean, selectedPage : string, setSelectedPage : any}) => {
    // A useEffect() that scrolls the screen all the way to the top whenever the page loads in.
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    // A string variable storing the text in the 'About' text element.
    const aboutText = 
    `
        Hi! My name is Niels Sogaard and I am a soon-to-be graduating computer science student at Case Western Reserve
        University with a minor in history. I am a results-driven software engineer with technical expertise spanning a wide
        variety of different languages and frameworks, including proficiency in Kotlin, Typescript, and React, and a solid ability
        to adapt to new languages and frameworks quickly.
    `

    return(
        <div className='wrapperPage'>
            <Navbar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
            <section>
                <Grid className='topPage' direction='column'>
                    <HelloThere isLandscape={props.isLandscape} />
                    <TextElement title="About" textBody={aboutText} isLandscape={props.isLandscape} topPadding={0} bottomPadding={0}/>
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