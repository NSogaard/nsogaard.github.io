import React from "react";
import Navbar from "../../reused_elements/navbar/Navbar.tsx";
import MiddleBar from "../../reused_elements/miscUi/MiddleBar.tsx";
import BottomBar from "../../reused_elements/miscUi/bottom_bar/BottomBar.tsx";
import { Grid, useThemeProps } from "@mui/material";
import TextImageElement from "../../edu-cert/text_image_element/TextImageElement.tsx";

const DAPortfolio = (props : {isLandscape : boolean}) => {

    return(
        <div className='wrapperPage' style={{height: '100vh'}}>
            <Navbar />
            <section>
                <Grid className='topPage' direction='column'>  
                    <Grid container className='swePortfolioEleWrapper' direction='column' alignItems='center'>
                        <h1>Data Analytics Portfolio</h1>
                        <Grid container justifyContent='center'>
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

export default DAPortfolio;