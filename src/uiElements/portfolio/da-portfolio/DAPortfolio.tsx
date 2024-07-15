import React from 'react';
import Navbar from '../../reused-elements/navbar/Navbar.tsx';
import BottomBar from '../../reused-elements/bottom-bar/BottomBar.tsx';
import { Grid } from '@mui/material';
import TextImageElement from '../../reused-elements/text-image-element/TextImageElement.tsx';

/*
 * The DAPortfolio ui element represents my 'Data Analytics Portfolio'. It is a page that is linked to by the PortfolioSelector (or the navbar)
 * and allows the visitor to see all of the different relevant projects that I have completed. Clicking any of the 'TextImageElements' in this
 * page will redirect you to the GitHub for the relevant project.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * selectedPage = A state variable from index.js that tells us which page is selected (for navbar styling).
 * setSelectedPage = A state setter function from index.js that allows us to change the selected page styling for the navbar.
 */
const DAPortfolio = (props : {isLandscape : boolean, selectedPage : string, setSelectedPage : any}) => {

    return(
        <div className='wrapperPage' style={{height: '100vh'}}>
            <Navbar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
            <section>
                <Grid className='topPage' direction='column'>  
                    <Grid container className='swePortfolioEleWrapper' direction='column' alignItems='center'>
                        <h1>Data Analytics Portfolio</h1>
                        <Grid container justifyContent='center'>
                            <TextImageElement
                                title='TBD'
                                textBody={''}
                                imgPath={'https://www.svgrepo.com/show/303500/react-1-logo.svg'}
                                redirectLink='https://github.com/NSogaard/portfolio-website'
                                hasDialog={false}
                                isLandscape={props.isLandscape}
                                height={17.5}
                                isActive={false}
                            />
                            <TextImageElement
                                title='TBD'
                                textBody={''}
                                imgPath={'https://www.svgrepo.com/show/303500/react-1-logo.svg'}
                                redirectLink='https://github.com/NSogaard/portfolio-website'
                                hasDialog={false}
                                isLandscape={props.isLandscape}
                                height={17.5}
                                isActive={false}
                            />
                            <TextImageElement
                                title='TBD'
                                textBody={''}
                                imgPath={'https://www.svgrepo.com/show/303500/react-1-logo.svg'}
                                redirectLink='https://github.com/NSogaard/portfolio-website'
                                hasDialog={false}
                                isLandscape={props.isLandscape}
                                height={17.5}
                                isActive={false}
                            />
                        </Grid>
                    </Grid>
                </Grid>       
                <BottomBar isLandscape={props.isLandscape} />
            </section>    
        </div>
    )
}

export default DAPortfolio;