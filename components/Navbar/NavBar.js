import React from 'react';
import { NavbarContainer, NavLogo, NavOption, NavContent } from "./NavbarStyled"
import DownloadFile from "../DownloadFile/DownloadFile"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";

const Navbar = (props) => {
    const navigateTo = (ref) => {
        if (ref !== null) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <NavbarContainer>
            <NavLogo src="/my-logo.png" alt="myLogo" width="60" height="60"/>
            <NavContent>
                <NavOption onClick={()=>{navigateTo(props.refs.homeRef)}}>Home</NavOption>
                <NavOption onClick={()=>{navigateTo(props.refs.aboutMeRef)}}>About Me</NavOption>
                <NavOption onClick={()=>{navigateTo(props.refs.contactRef)}}>Contact</NavOption>
                <NavOption><DownloadFile src="/cv.pdf"><FontAwesomeIcon icon={faFilePdf} color={"#eaeaea"} title={"cv-download"} /></DownloadFile></NavOption>
            </NavContent>
        </NavbarContainer>);

}

export default Navbar;