import React from 'react'
import { Grid } from '@mui/material'
import PortfolioOption from './PortfolioOption.tsx'
import loremIpsum from '../styling/loremIpsum.tsx'
import TextImageElement from '../edu-cert/text_image_element/TextImageElement.tsx'

const PortfolioSelector = (props : {isLandscape : boolean}) => {

    return (
        <Grid container className='portSelector' direction='column' alignItems='center'>
            <h1>Portfolios</h1>
            <Grid item container className='portSelectorWrapper' justifyContent='center'>
                <TextImageElement 
                    title='Software Development Portfolio'
                    textBody={loremIpsum}
                    imgPath='https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.png?height=640&width=640&fit=bounds'
                    redirectLink={`SWEPortfolio`}
                    hasDialog={false}
                    isLandscape={props.isLandscape}
                    height={25}
                    isActive={true}
                />
                <TextImageElement 
                    title='Data Analytics Portfolio (To Be Completed During Boot Camp)'
                    textBody={loremIpsum}
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