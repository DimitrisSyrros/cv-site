import React, {forwardRef} from 'react';
import Image from "next/image";
import {ContactMeWrapper, StyledAnchor, ContactInfo, StyledPar, InfoBox, ContactLink, ContactLogo} from "../styles/ContactMeStyled";
import {faEnvelope, faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const ContactMe = forwardRef((props, ref) => {
    return (
        <ContactMeWrapper ref={ref}>
            <InfoBox>
                <Image src="/profile.jpeg" alt="profile_picture" id="profile" width="300" height="300"/>
                <ContactInfo>
                    <h2>Feel free to contact me.</h2>
                    <ContactLink>
                        <ContactLogo icon={faLinkedin}/>
                        <StyledAnchor
                            href={"http://www.linkedin.com/in/dimsyrros"}>linkedin.com/in/dimsyrros</StyledAnchor>
                    </ContactLink>
                    <ContactLink>
                        <ContactLogo icon={faEnvelope}/>
                        <StyledPar title={'Click to copy'} onClick={() => {
                            navigator.clipboard.writeText("dimsyrr@gmail.com")
                        }}>dimsyrr@gmail.com</StyledPar>
                    </ContactLink>
                    <ContactLink>
                        <ContactLogo icon={faGithub}/>
                        <StyledAnchor
                            href={"https://github.com/DimitrisSyrros"}>github.com/DimitrisSyrros</StyledAnchor>
                    </ContactLink>
                </ContactInfo>
            </InfoBox>
        </ContactMeWrapper>
    );
})

export default ContactMe;