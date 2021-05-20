import React from 'react';
import { NavbarContainer, NavLogo, NavOption, NavContent } from "./NavbarStyled"

const Navbar = () => {

    return (
        <NavbarContainer>
            <NavLogo src="/my-logo.png" alt="myLogo" width="60" height="60"/>
            <NavContent>
                <NavOption>Home</NavOption>
                <NavOption>About Me</NavOption>
                <NavOption>Contact</NavOption>
            </NavContent>
        </NavbarContainer>);

}

export default Navbar;