import React from 'react';
import { LangName, Box, Languages, AboutMeContainer, SectionHeader, LangLogo, Skill } from './Static/AboutMeStyled';
import {faPhp, faReact} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';


const Skills = () => {

    return (
        <AboutMeContainer>
            <SectionHeader>Demonstrated Experience</SectionHeader>
            <Languages>
                <Skill options={{max: 50, speed: 200}}>
                    <Box
                        color={"#61DBFB"}
                    >
                        <LangName className ="name">React</LangName>
                        <LangLogo icon={faReact} size={'3x'} color={"#61DBFB"}/>
                    </Box>
                </Skill>
                <Skill options={{max: 50, speed: 200}}>
                    <Box
                        color={"#787CB5"}
                    >
                        <LangName className ="name">PHP</LangName>
                        <LangLogo icon={faPhp} size={'3x'} color={"#787CB5"}/>
                    </Box>
                </Skill>
                <Skill options={{max: 50, speed: 200}}>
                    <Box
                        color={"#1EBBAF"}
                    >
                        <LangName className ="name">Go</LangName>
                        <Image src="/Go-Logo_Aqua.png" alt="golang" width="100" height="50"/>
                    </Box>
                </Skill>
            </Languages>
        </AboutMeContainer>
    );
}

export default Skills;