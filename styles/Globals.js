import styled, { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    backgroundColor: "#2b6777",
    headerColor: "#52ab98",
    secondaryColor: "#c8d8e4",
    basicColor: "wheat",
    name:"light",
    background: "../../light-background.svg",
    background2: "../../light-background2-.svg",
    contactBackground: "darkcyan",
    greetingColor: "#2b6777",
    contactObjColor:"#2b6777"

}

export const darkTheme = {
    backgroundColor: "#292C30",
    headerColor: "#f9c959",
    secondaryColor: "#d3dbe8",
    basicColor: "white",
    name:"dark",
    background: "../../blob-background.svg",
    background2: "../../blob-background2.svg",
    contactBackground: "#292C30",
    greetingColor: "white",
    contactObjColor:"#292C30",
    fsXXXL:"",
    fsXXL:"",
    fsXL:"",
    fsL:"",
    fsMD:"",
    fsSM:""
}

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.basicColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    background-size: cover;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
    transition: all 0.50s linear;
  }

  * {
    box-sizing: border-box;
  }

  :root{
    --fs-xsmall: 12px;
    --fs-small: 15px;
    --fs-medium: 17px;
    --fs-large: 19px;
    --fs-xlarge: 24px;
    --fs-xxlarge: 40px;
    --fs-xxxlarge: 80px;
  }
`;
