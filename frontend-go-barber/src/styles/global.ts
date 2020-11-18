import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #312e38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  body, input {
    font-family: 'Nunito', serif;
    font-size: 16px;
  }

  button {
    font-size: 18px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
