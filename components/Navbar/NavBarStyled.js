import styled from 'styled-components';
import Image from "next/image";

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index:5;
  padding: 10px 0 10px 25px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
  @media only screen and (min-width: 1024px) {
    justify-content: center;
  }  
`;


export const NavContent = styled.div`
  width: 100vw;
  margin: auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavOption = styled.p`
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 400;
  display: block;
  cursor: pointer;
  padding: 0 2%;
  &:hover {
    transition: 0.3s ease-in;
    transform: scale(1.3);
  }
  @media only screen and (min-width: 1024px) {
    padding: 0 2%;
  }
`;

export const NavLogo = styled(Image)`
  border-radius: 50%;
  @media only screen and (min-width: 1024px) {
    float: left;
  }
`;

export const ContactButton = styled.button`
  text-decoration: none;
  color: white;
  font-size: 16px;
  border: thin solid #ffb400;
  background: transparent;
  padding: 0 7%;
  @media only screen and (min-width: 1024px) {
    padding: 0 2%;
  }
  &:hover {
    background-color: #ffb400;
    color: #071e57;
    cursor: pointer;
`;
