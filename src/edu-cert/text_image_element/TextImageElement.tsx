import { Dialog, DialogContent, Grid, Stack } from "@mui/material";
import Image from "mui-image";
import React, { Fragment, useState } from "react";
import TextImageDialog from "./TextImageDialog.tsx";
import { Navigate, useNavigate } from "react-router-dom";

const TextImageElement = (props : {
    title : string,
    subTitle? : string,
    textBody : string,
    imgPath : string,
    relatedCW?,
    redirectLink? : string,
    hasDialog : boolean,
    isLandscape : boolean,
    height : number,
    isActive : boolean    
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const navigate = useNavigate();

    return (
        <Fragment>
            <Grid
                container
                className={'textImageElement ' + (props.isActive ? 'active' : '')}
                direction='row'
                justifyContent='center'
                xs={props.isLandscape ? 6 : 9}
                onClick={(props.isActive) ? () => {(props.hasDialog) ? handleOpen() : ((props.redirectLink?.includes('https')) ?  window.open(props.redirectLink, '_blank', 'noreferrer') : navigate(`${props.redirectLink}`))} : () => {}}
                sx={{height: `${props.height}vh`}}
            >
                <Grid item xs={3} height='fit-content' alignSelf='center'>
                    <Image className='textImageImage' src={props.imgPath} style={(props.isActive) ? {} : {filter: "grayscale(75%)"}}/>
                </Grid>
                <Grid container xs={9} direction='column' className='textImageText' height='fit-content' alignSelf='center'>
                    <Grid className="teImgTitle"><h3>{props.title}</h3></Grid>
                    { (props.subTitle !== undefined) ?
                        <Grid className="teImgSubtitle"><h3>{props.subTitle}</h3></Grid>
                        :
                        <div style={{height: '0', margin: '0 0 0 0'}}></div>
                    }
                    <Grid className="teImgBody"><p>{props.textBody}</p></Grid>
                </Grid>
            </Grid>
                {props.hasDialog ? 
                <Dialog className='textImageDialog' onClose={handleClose} open={open}>
                    <TextImageDialog
                        title={props.title}
                        subTitle={props.subTitle}
                        textBody={props.textBody}
                        relatedCW={props.relatedCW}
                        imgPath={props.imgPath}
                    />
                </Dialog>
                :
                <></>
                }
        </Fragment>
    )
}

export default TextImageElement;