import React, { useEffect } from "react";
import Navbar from "../reused_elements/navbar/Navbar.tsx";
import MiddleBar from "../reused_elements/miscUi/MiddleBar.tsx";
import BottomBar from "../reused_elements/miscUi/bottom_bar/BottomBar.tsx";
import loremIpsum from "../styling/loremIpsum.tsx";
import { Grid, useThemeProps } from "@mui/material";
import { EduListInfo, EducationList } from "./EducationList.tsx";
import CertificationsList from "./certifications/CertificationsList.tsx";
import { CertificationInfo } from "./certifications/Certification.tsx";

const EducationCertification = (props : {isLandscape : boolean}) => {
    const educationListInfo : EduListInfo[] = [
        {
            title: 'B.A. at Case Western Reserve University (2020 - 2024)',
            subTitle : 'Computer Science (Major) - History (Minor)',
            textBody : loremIpsum,
            imgPath : 'https://upload.wikimedia.org/wikipedia/en/0/08/Case_Western_Reserve_University_seal.svg',
            topPadding : 0,
            bottomPadding : 0,
        },
        {
            title: 'CWRU Data Analytics Boot Camp (2024/2025)',
            subTitle : 'A Course in Modeling, ML / AI, Tableau, etc.',
            textBody : loremIpsum,
            imgPath : 'https://upload.wikimedia.org/wikipedia/en/0/08/Case_Western_Reserve_University_seal.svg',
            topPadding : 0,
            bottomPadding : 0,
        }
    ]

    const certificationListInfo : CertificationInfo[] = [
        {
            srcLogoPath: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/codecademy_logo_icon_167734.png',
            skillImgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
            certificateTitle: 'Create a Front-End App with React',
            srcName: 'Codecademy - Skill Path',
            certLink: 'https://drive.google.com/file/d/1j_JsJ8Gu21IgN_MR-M8H9Eh1B7dQ7vNZ/view?usp=sharing'
        },
        {
            srcLogoPath: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/codecademy_logo_icon_167734.png',
            skillImgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
            certificateTitle: 'Learn CSS',
            srcName: 'Codecademy - Course',
            certLink: 'https://drive.google.com/file/d/1V7K-DWIiRDejwQb4B21LhG4FeR9cNlrC/view?usp=sharing'
        },
        {
            srcLogoPath: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/codecademy_logo_icon_167734.png',
            skillImgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png',
            certificateTitle: 'Learn JavaScript',
            srcName: 'Codecademy - Course',
            certLink: 'https://drive.google.com/file/d/127SHworLuEu9m0xVao70_JUeUfU0qXXU/view?usp=sharing'
        },
        {
            srcLogoPath: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/codecademy_logo_icon_167734.png',
            skillImgPath: 'https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png',
            certificateTitle: 'Learn Python 3',
            srcName: 'Codecademy - Course',
            certLink: 'https://drive.google.com/file/d/1OGjn3CUDdw2xar0cDH18VFQSh-5MvYym/view?usp=sharing'
        },
        {
            srcLogoPath: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/codecademy_logo_icon_167734.png',
            skillImgPath: 'https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png',
            certificateTitle: 'Visualize Data with Python (2022 Version)',
            srcName: 'Codecademy - Course',
            certLink: 'https://drive.google.com/file/d/1pNJ4hYCD3sDmZdIL_gNdTZRrJABLxZSw/view?usp=sharing'
        },
        {
            srcLogoPath: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/codecademy_logo_icon_167734.png',
            skillImgPath: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
            certificateTitle: 'Learn SQL',
            srcName: 'Codecademy - Course',
            certLink: 'https://drive.google.com/file/d/1EtK-mC1v81iPUelOuBqex8J_i80X_yWu/view?usp=sharing'
        },
        {
            srcLogoPath: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/codecademy_logo_icon_167734.png',
            skillImgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png',
            certificateTitle: 'Learn Kotlin',
            srcName: 'Codecademy - Course',
            certLink: 'https://drive.google.com/file/d/14qmmFydI_NoLSJ6IXnL1eS1_wF2iyp-e/view?usp=sharing'
        },
        {
            srcLogoPath: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/codecademy_logo_icon_167734.png',
            skillImgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png',
            certificateTitle: 'Learn C#',
            srcName: 'Codecademy - Course',
            certLink: 'https://drive.google.com/file/d/1iuU4eFhrLyY2G1DSiuAuHpXVNtnLcZLB/view?usp=sharing'
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className='wrapperPage'>
            <Navbar />
            <section>
                <Grid className='topPage' direction='column'>
                    <EducationList infoList={educationListInfo} isLandscape={props.isLandscape} />
                </Grid>       
                <MiddleBar />
            </section>
            <section>
                <Grid className='topPage' direction='column'>
                    <CertificationsList certList={certificationListInfo} isLandscape={props.isLandscape} />
                </Grid>
                <BottomBar isLandscape={props.isLandscape} />
            </section>      
        </div>
    )
}

export default EducationCertification;