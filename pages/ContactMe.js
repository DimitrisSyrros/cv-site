import React, {forwardRef} from 'react';
import Image from "next/image";
import {ContactMeWrapper, StyledAnchor, ContactInfo, StyledPar, InfoBox} from "./Static/ContactMeStyled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";
import DownloadFile from "../components/DownloadFile/DownloadFile";


const ContactMe = forwardRef((props,ref) => {
    return (
        <ContactMeWrapper ref={ref}>
            <InfoBox>
            <Image src="/profile.jpeg" alt="profile_picture" id="profile" width="300" height="300"/>
            <ContactInfo>
                <h2>Feel free to contact me.</h2>
                <StyledAnchor href={"http://www.linkedin.com/in/dimsyrros"}>linkedin.com/in/dimsyrros</StyledAnchor>
                <StyledPar title={'Click to copy'} onClick={() => {navigator.clipboard.writeText("dimsyrr@gmail.com")}}>dimsyrr@gmail.com</StyledPar>
                <DownloadFile src="/cv.pdf">Learn more about me. <FontAwesomeIcon icon={faFilePdf} title={"cv-download"} /></DownloadFile>
            </ContactInfo>
            </InfoBox>
        </ContactMeWrapper>
    );
})

export default ContactMe;