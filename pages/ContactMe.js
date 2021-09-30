import React, {forwardRef} from 'react';
import {
    ContactMeWrapper,
    StyledAnchor,
    ContactInfo,
    StyledPar,
    InfoBox,
    ContactLink,
    ContactLogo,
    LoveLogo,
    MadeWithLove,
    MainWrapper
} from "../styles/ContactMeStyled";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm/ContactForm";
import {MainHeader, MainHeaderShadow, YellowSpan, CardTitle} from "../styles/AboutMeStyled";
import {faHeart} from "@fortawesome/free-solid-svg-icons";


const ContactMe = forwardRef((props, ref) => {
    return (
        <ContactMeWrapper ref={ref}>
            <MainHeader>Let's <YellowSpan>Talk</YellowSpan></MainHeader>
            <MainHeaderShadow transformation='-203%'>Contact</MainHeaderShadow>
            <MainWrapper>
                <InfoBox>
                    <div id={"halo"} style={{background:"conic-gradient(from 270deg, #fe5848 10%, #f9c959 35%, #bde5c9, #8dc98f, #006792 72% 75%, #fe5848 95%)",borderRadius:"50%", width:"310px", height:"310px"}}>
                    <img src="/profile.jpeg" alt="profile_picture" id="profile" width="300" height="300"/>
                    </div>
                    <ContactInfo>
                        <CardTitle>Feel free to <YellowSpan>contact</YellowSpan> me.</CardTitle>
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
                <ContactForm/>
            </MainWrapper>
            <MadeWithLove>Made with <LoveLogo icon={faHeart} color="red"/> by Dimitris Syrros</MadeWithLove>
        </ContactMeWrapper>
    );
})

export default ContactMe;