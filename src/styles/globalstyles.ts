import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root{
    font-size: 62.5%;

    --white: #FFFFFF;
    --black: #000000;
    --green: #68DE5A;
    --purple: #7D38DB;
    --pink: #FF8BD9;
    --gray-100: #F5F5F5;
    --gray-400: #E3E3E3;
    --gray-500: #D5D5D5;
    --gray-700: #444444;
  }

  body {
    width: 100vw;
    height: 100vh;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3 , h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`