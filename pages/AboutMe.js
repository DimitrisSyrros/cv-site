import React from 'react';
import {AboutMeDiv} from "./Static/AboutMeStyled";
import Image from "next/image";

const AboutMe = () => {
    return (
        <AboutMeDiv>
            <Image src="/profile.jpeg" alt="profile_picture" id="profile" width="250" height="250"/>
            <p>I'm a web developer focusing on front‑end technologies
                and aspire to create clean and user‑friendly experiences.
                I strive to cultivate and hone my skill set to be adaptive to new challenges,
                a strong team player and a critical thinker.</p>
        </AboutMeDiv>
    )
}

export default AboutMe;