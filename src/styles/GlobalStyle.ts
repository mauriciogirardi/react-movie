import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:  0;
  }

  body, html {
    height: 100vh;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: 'Roboto', serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  input,button, select {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
