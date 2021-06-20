import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: white;
    background-color: #292c30;
    background-size: cover;
    height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

`;