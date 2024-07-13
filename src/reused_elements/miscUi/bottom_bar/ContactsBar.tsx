import React from "react";
import { Box, Button, Grid } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';

const ContactsBar = () => {

    return (
        <Grid container className='contactsBar'>
            <Link target="_blank" href='http://www.linkedin.com/in/niels-sogaard-22a05823b' className='socialLink' color='#000000'><LinkedInIcon className='socialButton' /></Link>
            <Link target="_blank" href='https://github.com/NSogaard' className='socialLink' color='#000000'><GitHubIcon className='socialButton' /></Link>
            <Link target="_blank" href='mailto:niels.sogaard2@gmail.com' className='socialLink' color='#000000'><EmailIcon className='socialButton' /></Link>
        </Grid>
    )
}

export default ContactsBar;