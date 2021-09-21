import styled, {css} from 'styled-components';
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index:5;
  padding: 10px 0 10px 25px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
  @media only screen and (min-width: 1024px) {
    justify-content: center;
  }  
`;


export const NavContent = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  z-index: 8;
  position: absolute;
  top: 0;
  left: -100%;
  background: black;
  transition: left 0.5s;
  ${ (props) => props.open === true && css`
    left: 0;
  ` }  
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    position: relative;
    left: 0;
    width: 100%;
    background: transparent;
    //height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    //height: calc(var(--vh, 1vh) * 100);
    height: 20%;
    justify-content: center;
  }
`;

export const NavOption = styled.p`
  text-decoration: none;
  color: #eaeaea;
  font-size: 24px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  display: block;
  cursor: pointer;
  padding: 0 2%;
  &:hover {
    transition: 0.3s ease-in;
    transform: scale(1.3);
  }
  @media only screen and (min-width: 1024px) {
    padding: 0 2%;
    font-size: 16px;
  }
`;

export const NavLogo = styled(Image)`
  border-radius: 50%;
  @media only screen and (min-width: 1024px) {
    float: left;
  }
`;

export const BurgerNav = styled(FontAwesomeIcon)`
  margin: 4%;
  @media only screen and (min-width: 1024px) {
    display: none;
    transition: display 0.5s;
  }
`;

export const CloseSideNav = styled(FontAwesomeIcon)`
  margin: 4%;
  z-index: 9;
  transition: all 0.5s;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
  ${ (props) => props.show === false && css`
      display: none;
  ` }
`;

