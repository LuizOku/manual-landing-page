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
    scroll-snap-align: center;
  }
  body {
    font: 14px sans-serif;
    background: #b8e6e2;
    color: #0c3c3d;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
`;
