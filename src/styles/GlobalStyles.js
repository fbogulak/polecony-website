import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap');

  :root {
    --primary: #2B6BE7;
    --primary-light: #4C83ED;
    --secondary: #1A4494;
    --accent: #E7F0FF;
    --text: #1F2937;
    --text-light: #6B7280;
    --background: #F8FAFC;
    --white: #FFFFFF;
    --gray-50: #F9FAFB;
    --gray-100: #F3F4F6;
    --gray-200: #E5E7EB;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    color: var(--text);
    background: var(--background);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    line-height: 1.2;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
`
