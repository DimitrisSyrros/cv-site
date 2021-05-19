import React from 'react';
import Image from "next/image";
import {ContactMeWrapper, StyledAnchor, ContactInfo, StyledPar} from "./Static/ContactMeStyled";


const ContactMe = () => {
    return (
        <ContactMeWrapper>
            <Image src="/profile.jpeg" alt="profile_picture" id="profile" width="300" height="300"/>
            <ContactInfo>
                <h2>Feel free to contact me.</h2>
                <StyledAnchor href={"http://www.linkedin.com/in/dimsyrros"}>linkedin.com/in/dimsyrros</StyledAnchor>
                <StyledPar>dimsyrr@gmail.com</StyledPar>
            </ContactInfo>
        </ContactMeWrapper>
    );
}

export default ContactMe;