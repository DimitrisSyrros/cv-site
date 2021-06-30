import React, {forwardRef} from 'react';
import { AboutMeContainer, EntryTitle, MainHeader, MainHeaderShadow,
        TimeLineEntry, SectionHeader, LangLogo,  TimeLineDetails,
        TimeLineGrid, Timestamp, YellowSpan, TopSection } from '../styles/AboutMeStyled';
import {timelineData} from '../public/timeline';
import {faBriefcase, faUniversity} from '@fortawesome/free-solid-svg-icons';

const EducExp = forwardRef((props,ref) => {
    const list = timelineData.map((item, index) =>
        <TimeLineEntry key={item.ID}>
            <TopSection>
            {
                item.type === "faUniversity" ?
                    <LangLogo icon={faUniversity} color={"#ffb200"}/>
                    : <LangLogo icon={faBriefcase} color={"#ffb200"}/>
            }
            <Timestamp>{item.timeStamp}</Timestamp>
            </TopSection>
            <EntryTitle>{item.entryTitle}</EntryTitle>
            <TimeLineDetails>{item.details}</TimeLineDetails>

            {
                item.readMore.map((item, index)=>{
                    return <p style={{fontSize:'14px', fontWeight:'400'}}>{item}</p>
                })
            }

        </TimeLineEntry>
    );
    return (
        <AboutMeContainer ref={ref}>
                <MainHeader>About <YellowSpan>Me</YellowSpan></MainHeader>
                <MainHeaderShadow transformation="-183%">Resume</MainHeaderShadow>
                <SectionHeader>Education <YellowSpan>&</YellowSpan> Experience</SectionHeader>
                <TimeLineGrid>
                    {list}
                </TimeLineGrid>
        </AboutMeContainer>
    );
})

export default EducExp;