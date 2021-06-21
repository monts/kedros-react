import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;

    --gray-100: #e1e1e6;
    --gray-900: #121214;

    --green-500: #35D86B;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    color: var(--gray-100);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
