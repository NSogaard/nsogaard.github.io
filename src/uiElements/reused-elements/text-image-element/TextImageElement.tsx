import { Dialog, Grid } from '@mui/material';
import Image from 'mui-image';
import React, { Fragment, useState } from 'react';
import TextImageDialog from './TextImageDialog.tsx';
import { useNavigate } from 'react-router-dom';

/*
 * The TextImageElement ui element represents a image and a block of text containing at least a text body and a title that can do one of many things.
 * It can be used to redirect to another page in the website, to an external page, or to bring up a dialog depending on what it needs to do. This is the
 * most used and (admittedly) most complicated element in the website, as it is used in many circumstances to do many things.
 * 
 * Props: 
 * isLandscape = A state variable from index.js that tells us whether or not the page is landscape.
 * setSelectedPage = A state setter function from index.js that allows us to change the selected page styling for the navbar. (optional - only used if 
 * the element is being used to redirect the user).
 * title = The title for the given TextImageElement
 * subTitle? = An ~optional~ element that will make a subtitle appear below the title in the element
 * textBody = A block of text that will appear below the title and subtitle elements.
 * imgPath = The URL of the image that we are trying to use in the element.
 * relatedCW? = If the TextImageElement is being used to display a dialog, this element stores what will appear in the second page of
 * that dialog (it is named this because it is used for the related course work in 'EducationList') (optional - only used if element is displaying dialog).
 * redirectLink? = this is the link that the visitor will be redirected to if the element has been configured to redirect the user. If the element contains
 * 'HTTP', the element assumes the link is external (as any internal link just adds on to the path and does not contain the base URL), and assumes the link
 * is internal otherwise. (optional - only used if the element will redirect the user to a new link).
 * hasDialog = This is a boolean that represents whether or not the element will be used to display a dialog.
 * height = This represents the height (in vh) of the element - this allows us to create differently sized elements for different use cases
 * isActive = This tells us whether or not the given element is 'active'. If it is not, the user will not be able to interact with the element and it w.ill be greyed out.
 * 
 */
const TextImageElement = (props : {
    isLandscape : boolean,
    setSelectedPage? : any
    title : string,
    subTitle? : string,
    textBody? : string,
    imgPath : string,
    relatedCW?,
    redirectLink? : string,
    hasDialog : boolean,
    height : number,
    isActive : boolean,
}) => {
    // A state variable representing whether or not the dialog for the element is open (if applicable)
    const [open, setOpen] = useState(false);

    // A function to set the 'open' variable to true if the dialog is opened.
    const handleOpen = () => {
        setOpen(true)
    }

    // A function to set the 'open' variable to false if the dialog is closed.
    const handleClose = () => {
        setOpen(false)
    }

    // Used to redirect to an internal link.
    const navigate = useNavigate();

    // A function that redirects us another part of the website (i.e. an internal redirect).
    const handleRedirectInternal = () => {
        props.setSelectedPage(props.title)
        navigate(`${props.redirectLink}`)
    }

    // A function that redirects us to an external website (i.e. an external redirect).
    const handleRedirectExternal = () => {
        window.open(props.redirectLink, '_blank', 'noreferrer')
    }

    return (
        <Fragment>
            <Grid
                container
                className={'textImageElement ' + (props.isActive ? 'active' : '')}
                direction='row'
                justifyContent='center'
                xs={props.isLandscape ? 6 : 9}
                onClick={(props.isActive) ? () => {(props.hasDialog) ? handleOpen() : ((props.redirectLink?.includes('https')) ? handleRedirectExternal() : handleRedirectInternal())} : () => {}}
                sx={{height: `${props.height}vh`}}
            >
                <Grid item xs={3} height='fit-content' alignSelf='center'>
                    <Image className='textImageImage' src={props.imgPath} style={(props.isActive) ? {} : {filter: 'grayscale(75%)'}}/>
                </Grid>
                <Grid container className='textImageText' xs={9} direction='column'  height='fit-content' alignSelf='center'>
                    <Grid><h3>{props.title}</h3></Grid>
                    { (props.subTitle !== undefined) ?
                        <Grid><h3>{props.subTitle}</h3></Grid>
                        :
                        <div style={{height: '0', margin: '0 0 0 0'}}></div>
                    }
                    { (props.textBody !== undefined) ?
                        <Grid className='teImgBodyWrapper'><p className='teImgBody'>{props.textBody}</p></Grid>
                        :
                        <div style={{height: '0', margin: '0 0 0 0'}}></div>
                    }    
                </Grid>
            </Grid>
                {(props.hasDialog && props.isActive) ? 
                <Dialog className='textImageDialog' onClose={handleClose} open={open}>
                    <TextImageDialog
                        title={props.title}
                        subTitle={props.subTitle}
                        textBody={(props.textBody !== undefined) ? props.textBody : ''}
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