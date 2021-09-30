import React, {useState} from 'react';
import {NavbarContainer, NavLogo, NavOption, NavContent, BurgerNav, CloseSideNav} from "../../styles/NavBarStyled"
import DownloadFile from "../DownloadFile/DownloadFile"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-regular-svg-icons";
import {faBars, faTimes, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "use-dark-mode";

const Navbar = (props) => {
    const darkMode = useDarkMode(true);
    const navigateTo = (ref) => {
        if (ref !== null) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
        setOpenNav(false);
    }
    const [openNav,setOpenNav] = useState(false)
    return (
        <NavbarContainer>
            <NavLogo src="/my-logo.png" alt="myLogo" width="60" height="60"/>
            <NavContent open={openNav}>
                <NavOption onClick={()=>{navigateTo(props.refs.homeRef);}}>Home</NavOption>
                <NavOption onClick={()=>{navigateTo(props.refs.aboutMeRef)}}>About Me</NavOption>
                <NavOption onClick={()=>{navigateTo(props.refs.contactRef)}}>Contact</NavOption>
                <NavOption><DownloadFile src="/cv.pdf"><FontAwesomeIcon icon={faFilePdf} color={"#eaeaea"} title={"cv-download"} /></DownloadFile></NavOption>
                <NavOption><FontAwesomeIcon onClick={darkMode.toggle} icon={darkMode.value === true ? faMoon : faSun} /></NavOption>
            </NavContent>
            <BurgerNav icon={faBars} color={"#eaeaea"} onClick={()=>setOpenNav(!openNav)}/>
            <CloseSideNav icon={faTimes} color={"#eaeaea"} onClick={()=>setOpenNav(!openNav)} show={openNav}/>
        </NavbarContainer>);

}

export default Navbar;