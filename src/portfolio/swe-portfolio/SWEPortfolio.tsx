import React from "react";
import Navbar from "../../reused_elements/navbar/Navbar.tsx";
import BottomBar from "../../reused_elements/miscUi/bottom_bar/BottomBar.tsx";
import { Grid } from "@mui/material";
import TextImageElement from "../../edu-cert/text_image_element/TextImageElement.tsx";
import loremIpsum from "../../styling/loremIpsum.tsx";

const SWEPortfolio = (props : {isLandscape : boolean, selectedPage : string, setSelectedPage : any}) => {

    return(
        <div className='wrapperPage' style={{height: '100vh'}}>
            <Navbar selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
            <section>
                <Grid className='topPage' direction='column'>
                    <Grid container className='swePortfolioEleWrapper' direction='column' alignItems='center'>
                        <h1>Software Engineering Portfolio</h1>
                        <Grid container justifyContent='center'>
                            <TextImageElement
                                title='Portfolio Website'
                                textBody={loremIpsum}
                                imgPath={'https://www.svgrepo.com/show/303500/react-1-logo.svg'}
                                redirectLink="https://github.com/NSogaard/portfolio-website"
                                hasDialog={false}
                                isLandscape={props.isLandscape}
                                height={17.5}
                                isActive={true}
                            />
                            <TextImageElement
                                title='TBD'
                                textBody={''}
                                imgPath={'https://www.svgrepo.com/show/303500/react-1-logo.svg'}
                                redirectLink="https://github.com/NSogaard/portfolio-website"
                                hasDialog={false}
                                isLandscape={props.isLandscape}
                                height={17.5}
                                isActive={false}
                            />
                            <TextImageElement
                                title='TBD'
                                textBody={''}
                                imgPath={'https://www.svgrepo.com/show/303500/react-1-logo.svg'}
                                redirectLink="https://github.com/NSogaard/portfolio-website"
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

export default SWEPortfolio;