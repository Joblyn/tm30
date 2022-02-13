import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: .15s all ease;
  }
  body {
    font-family: 'Graphik', 'Helvetica Neue', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    line-height: 1.42857143;
    color: #333;
    background-color: #fff;
    margin: 0;
  }
`;
