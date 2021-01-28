import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 14px sans-serif;
    background: #ffffff;
    color: #0c3c3d;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
`;
