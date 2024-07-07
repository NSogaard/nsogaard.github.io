import { Grid, Stack } from "@mui/material";
import React from "react";
import SkillElement from "./SkillElement.tsx";

const SkillsList = (props : {isLandscape : boolean}) => {

    return(
        <Grid container className='skillList' xs={props.isLandscape ? 6 : 9} justifyContent='center'>
            <h1>Skills</h1>
            <Grid container rowGap={props.isLandscape ? 5 : 2} columnGap={5} justifyContent='space-evenly'>
                <SkillElement skillName='Javascript' isLandscape={props.isLandscape} imagePath='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png' />
                <SkillElement skillName='Typescript' isLandscape={props.isLandscape} imagePath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqB6MVgg4YYo8JXyrFpHSxqU_zXq57RxRN3A&s' />
                <SkillElement skillName='CSS' isLandscape={props.isLandscape} imagePath='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png' />
                <SkillElement skillName='HTML' isLandscape={props.isLandscape} imagePath='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png' />
                <SkillElement skillName='React' isLandscape={props.isLandscape} imagePath='https://www.svgrepo.com/show/303500/react-1-logo.svg' />
                <SkillElement skillName='R' isLandscape={props.isLandscape} imagePath='https://lh6.googleusercontent.com/proxy/Tdz9NhhtMa5sL46AAoZEaEvQfELS-i3GhXeFXpDBHmONYJes-lBCD_nuTovseFvUSFgk_iFSdXiGdqTPpjRcKQiwucRKFiiXy2waz9Aihz1lr71fCjC7ZCEkzI_cx6DyY_ZSOQ9D-e6_' />
                <SkillElement skillName='Python' isLandscape={props.isLandscape} imagePath='https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png' />
                <SkillElement skillName='SQL' isLandscape={props.isLandscape} imagePath='https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.jpg' />
                <SkillElement skillName='Java' isLandscape={props.isLandscape} imagePath='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png' />
                <SkillElement skillName='Kotlin' isLandscape={props.isLandscape} imagePath='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png' />
                <SkillElement skillName='Jira' isLandscape={props.isLandscape} imagePath='https://cdn.worldvectorlogo.com/logos/jira-1.svg' />
                <SkillElement skillName='Git' isLandscape={props.isLandscape} imagePath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEj_V6_aIHeHJk9LAEq1kk5Bs7bjAzb82qw&s' />
            </Grid>
        </Grid>
    )
}

export default SkillsList;