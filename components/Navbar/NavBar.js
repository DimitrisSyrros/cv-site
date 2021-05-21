import React from 'react';
import { NavbarContainer, NavLogo, NavOption, NavContent } from "./NavbarStyled"
import DownloadFile from "../DownloadFile/DownloadFile"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {

    return (
        <NavbarContainer>
            <NavLogo src="/my-logo.png" alt="myLogo" width="60" height="60"/>
            <NavContent>
                <NavOption>Home</NavOption>
                <NavOption>About Me</NavOption>
                <NavOption>Contact</NavOption>
                <NavOption><DownloadFile src="/cv.pdf"><FontAwesomeIcon icon={faFilePdf} title={"cv-download"} /></DownloadFile></NavOption>
            </NavContent>
        </NavbarContainer>);

}

export default Navbar;