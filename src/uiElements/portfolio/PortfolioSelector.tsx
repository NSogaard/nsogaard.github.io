import React from 'react';
import { Grid } from '@mui/material';
import TextImageElement from '../reused-elements/text-image-element/TextImageElement.tsx';

/*
 * The PortfolioSelector ui element represents a list of the two different portfolios that appear in this website - 
 * my 'Software Engineering Portfolio' and my 'Data Analytics Portfolio'. It is the only element that directly appears in the
 * 'Portfolio' element and allows the user to redirect to whichever portfolio they wish to.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * setSelectedPage is a state setter function from index.js that allows us to change the selected page styling for the navbar.
 */
const PortfolioSelector = (props : {isLandscape : boolean, setSelectedPage : any} ) => {
    // This is a string that represents the text body that will appear for the 'Software Engineering Portfolio Portfolio'
    const swePortfolioBodyText = 
    `
        This portfolio contains a number of projects using both front-end and (TBA) back-end frameworks. These projects display
        skills that I learned on my own, through my undergraduate education, during my past work experiences and through the 
        certifications that I have gained over the course of the past five or so years.
    `

    // This is a string that represents the text body that will appear for the 'Data Analytics Portfolio Portfolio'
    const daPortfolioBodyText = 
    `
        This portfolio contains a number of projects using a number of different platforms and languages related to data
        analytics. These were completed over the course of my undergraduate education as well as during my boot camp.
    `

    return (
        <Grid container className='portSelector' direction='column' alignItems='center'>
            <h1>Portfolios</h1>
            <Grid item container className='portSelectorWrapper' justifyContent='center'>
                <TextImageElement 
                    title='Software Engineering Portfolio'
                    textBody={swePortfolioBodyText}
                    imgPath='https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.png?height=640&width=640&fit=bounds'
                    redirectLink={`SWEPortfolio`}
                    hasDialog={false}
                    isLandscape={props.isLandscape}
                    height={25}
                    isActive={true}
                    setSelectedPage={props.setSelectedPage}
                />
                <TextImageElement 
                    title='Data Analytics Portfolio (To Be Completed During Boot Camp)'
                    textBody={daPortfolioBodyText}
                    imgPath='https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png'
                    redirectLink={`DAPortfolio`}
                    hasDialog={false}
                    isLandscape={props.isLandscape}
                    height={25}
                    isActive={false}
                />
            </Grid>
        </Grid>
    )
}

export default PortfolioSelector;