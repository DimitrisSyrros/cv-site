import React, {useState} from 'react';
import '../styles/AboutMePage.module.scss';
import { AboutMeContainer, EntryTitle, MainHeader, MainHeaderShadow,
        TimeLineEntry, SectionHeader, LangLogo,  TimeLineDetails,
        TimeLineGrid, Timestamp } from './Static/AboutMeStyled';
import {timelineData} from './timeline';
import {faBriefcase, faUniversity} from '@fortawesome/free-solid-svg-icons';

const EducExp = () => {
    const list = timelineData.map((item, index) =>
        <TimeLineEntry key={index} background={item.background}>
            {
                item.type === "faUniversity" ?
                    <LangLogo icon={faUniversity} color={"#ffb200"}/>
                    : <LangLogo icon={faBriefcase} color={"#ffb200"}/>
            }
            <Timestamp>{item.timeStamp}</Timestamp>
            <EntryTitle>{item.entryTitle}</EntryTitle>
            <TimeLineDetails>{item.details}</TimeLineDetails>
            <ul>
            {
                item.readMore.map((item, index)=>{
                    return <li style={{fontSize:'14px', fontWeight:'400'}}>{item}</li>
                })
            }
            </ul>
        </TimeLineEntry>
    );
    return (
        <AboutMeContainer>
                <MainHeader>About <span className="yellow">Me</span></MainHeader>
                <MainHeaderShadow>Resume</MainHeaderShadow>
                <SectionHeader>Education <span className="yellow">&</span> Experience</SectionHeader>
                <TimeLineGrid>
                    {list}
                </TimeLineGrid>
        </AboutMeContainer>
    );
}

export default EducExp;