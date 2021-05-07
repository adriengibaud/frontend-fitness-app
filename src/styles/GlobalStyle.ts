import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Raleway, sans-serif;
    font-weight: 400;
    background: white;
  }
  body {
    min-height: 100vh;
  }
  `;
