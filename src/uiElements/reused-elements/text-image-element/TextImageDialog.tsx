import { Box, DialogContent, Grid } from '@mui/material';
import React from 'react';
import loremIpsum from '../../../styling/loremIpsum.tsx'
import Image from 'mui-image';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

const TextImageDialog = (props : {title : string, subTitle? : string, textBody : string, relatedCW? : JSX.Element, imgPath : string}) => {

    return (
        <DialogContent className='dialogRoot' sx={{'&::-webkit-scrollbar': { display: 'none' }}}>
            {
                (props.relatedCW !== undefined) ? 
                <Grid container className='dialogContent'>
                    <Grid container className='dialogRelatedCW' alignContent='center' justifyContent='center'>
                        <Grid item sx={{height: 'fit-content', margin: '0 0 1.5% 0'}}><h3>Related Course Work:</h3></Grid>
                        <Grid item><p>{props.relatedCW}</p></Grid>
                    </Grid>
                </Grid>
                :
                <Grid container className='dialogContent' direction='column' alignItems='center' justifyContent='center'>
                    <Grid item className='dialogImage'><Image src={props.imgPath}/></Grid>
                    <Grid className='dialogTitle' textAlign='center'>
                        <Grid item><h3>{props.title}</h3></Grid>
                        {(props.subTitle !== undefined) ?
                        <Grid item><h3>{props.subTitle}</h3></Grid>
                        :
                        <></>
                        }   
                    </Grid>
                    <Grid item className='dialogDesc'>
                        <p>{props.textBody}</p>
                    </Grid>
                    {
                        (props.relatedCW !== undefined) ? 
                        <Grid item className='arrowIcon'><ArrowDropDownCircleOutlinedIcon /></Grid>
                        :
                        <></>
                    }
                </Grid>
            }           
        </DialogContent>
    )
}

export default TextImageDialog;