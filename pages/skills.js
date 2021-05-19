import React from 'react';
import '../styles/AboutMePage.module.scss';
import { LangName, Box, Languages, AboutMeContainer, SectionHeader, LangLogo } from './Static/AboutMeStyled';
import {faPhp, faReact, faPython, faSass, faHtml5} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Title from 'react-vanilla-tilt';

const Skills = () => {

    return (
        <AboutMeContainer>
            <SectionHeader>Demonstrated Experience</SectionHeader>
            <Languages>
                <Title className={'skill'} options={{max: 50, speed: 200}}>
                    <Box
                        color={"#61DBFB"}
                    >
                        <LangName className ="name">React</LangName>
                        <LangLogo icon={faReact} size={'3x'} color={"#61DBFB"}/>
                    </Box>
                </Title>
                <Title className={'skill'} options={{max: 50, speed: 200}}>
                    <Box
                        color={"#787CB5"}
                    >
                        <LangName className ="name">PHP</LangName>
                        <LangLogo icon={faPhp} size={'3x'} color={"#787CB5"}/>
                    </Box>
                </Title>
                <Title className={'skill'} options={{max: 50, speed: 200}}>
                    <Box
                        color={"#1EBBAF"}
                    >
                        <LangName className ="name">Go</LangName>
                        <Image src="/Go-Logo_Aqua.png" alt="golang" width="100" height="50"/>
                    </Box>
                </Title>
            </Languages>
        </AboutMeContainer>
    );
}

export default Skills;