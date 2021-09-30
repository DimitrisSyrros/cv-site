import React from 'react';
import {AboutMeSection, Summary} from "../styles/AboutMeStyled";
import Image from "next/image";

const AboutMe = () => {
    return (
        <AboutMeSection>
            <Image src="/my-logo-black.png" alt="profile_picture" id="profile" width="250" height="250" />
            <Summary>I'm a web developer focusing on front‑end technologies
                and aspire to create clean and user‑friendly experiences.
                I strive to cultivate and hone my skill set to be adaptive to new challenges,
                a strong team player and a critical thinker.</Summary>
        </AboutMeSection>
    )
}

export default AboutMe;