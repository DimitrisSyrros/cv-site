import React from 'react';
import {AboutMeDiv} from "./Static/AboutMeStyled";
import Image from "next/image";

const AboutMe = () => {
    return (
        <AboutMeDiv>
            <Image src="/profile.jpeg" alt="profile_picture" id="profile" width="400" height="400"/>
            <p>I'm a web developer focusing on front‑end technologies
                I aspire to create clean and user‑friendly experiences and I am passionate
                about building quality software that improves the lives of those around me.
                I am a motivated, self - driven and detail oriented. I strive to cultivate and hone my skills set to become even more adaptive to new challenges,
                a strong team player and a critical thinker.</p>
        </AboutMeDiv>
    )
}

export default AboutMe;