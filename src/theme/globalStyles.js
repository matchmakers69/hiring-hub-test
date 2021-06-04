import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap');

*, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }


  body {
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem; 
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #FFF;
    .page-wrapper {
      padding: 1.5rem;
      margin: 0 auto;
      width: 100%;
      max-width:1200px;
     font-weight: 400;
    }
  }
  #root {
    width: 100%;
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

export default GlobalStyles;
