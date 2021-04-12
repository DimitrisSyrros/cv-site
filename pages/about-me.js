import React from 'react';
import '../styles/AboutMePage.module.scss';
import { LangName, Box, Languages, AboutMeContainer, EntryTitle, MainHeader, MainHeaderShadow,
        TimeLineEntry, SectionHeader, LangLogo, SubHeader, ReadMoreBtn, TimeLineDetails,
        TimeLineGrid, Timestamp } from './Static/AboutMeStyled';
import {timelineData} from './timeline';
import {faBriefcase, faUniversity} from '@fortawesome/free-solid-svg-icons';
import {faPhp, faReact, faPython, faSass, faHtml5} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Title from 'react-vanilla-tilt';

const AboutMe = () => {
    const list = timelineData.map((item, index) =>
        <TimeLineEntry key={index}>
            {
                item.type === "faUniversity" ?
                    <LangLogo icon={faUniversity} color={"#ffb200"}/>
                    : <LangLogo icon={faBriefcase} color={"#ffb200"}/>
            }
            <Timestamp>{item.timeStamp}</Timestamp>
            <EntryTitle>{item.entryTitle}</EntryTitle>
            <SubHeader>{item.subHeader}</SubHeader>
            <TimeLineDetails>{item.details}</TimeLineDetails>
            {
                item.details && <ReadMoreBtn>Read More</ReadMoreBtn>
            }
        </TimeLineEntry>
    );
    return (
        <AboutMeContainer>
            <div>
                <MainHeader>About <span className="yellow">Me</span></MainHeader>
                <MainHeaderShadow>Resume</MainHeaderShadow>
                <SectionHeader>Education <span className="yellow">&</span> Experience</SectionHeader>
                <TimeLineGrid>
                    {list}
                </TimeLineGrid>
                <SectionHeader>Highlighted Skills</SectionHeader>
                <Languages>
                    <Title className={'skill'} options={{max: 50, speed: 200}}>
                        <Box>
                            <LangName className ="name">React</LangName>
                            <LangLogo icon={faReact} size={'3x'} color={"#61DBFB"}/>
                        </Box>
                    </Title>
                    <Title className={'skill'} options={{max: 50, speed: 200}}>
                        <Box>
                            <LangName className ="name">PHP</LangName>
                            <LangLogo icon={faPhp} size={'3x'} color={"#787CB5"}/>
                        </Box>
                    </Title>
                    <Title className={'skill'} options={{max: 50, speed: 200}}>
                        <Box>
                            <LangName className ="name">HTML</LangName>
                            <LangLogo icon={faHtml5} size={'3x'} color={"#E44D26"}/>
                        </Box>
                    </Title>
                    <Title className={'skill'} options={{max: 50, speed: 200}}>
                        <Box>
                            <LangName className ="name">SCSS</LangName>
                            <LangLogo icon={faSass} size={'3x'} color={"#CD6799"}/>
                        </Box>
                    </Title>
                    <Title className={'skill'} options={{max: 50, speed: 200}}>
                        <Box>
                            <LangName className ="name">Python</LangName>
                            <LangLogo icon={faPython} size={'3x'} color={"#FFE873"}/>
                        </Box>
                    </Title>
                    <Title className={'skill'} options={{max: 50, speed: 200}}>
                        <Box>
                            <LangName className ="name">Go</LangName>
                            <Image src="/Go-Logo_Aqua.png" alt="golang" width="100" height="50"/>
                        </Box>
                    </Title>
                </Languages>
            </div>
        </AboutMeContainer>
    );
}

export default AboutMe;