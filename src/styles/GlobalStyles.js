import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

  :root {
    --primary: #0F8CE9;
    --primary-dark: #074E8C;
    --primary-light: #4CB1FF;
    --primary-pale: #E5F2FF;
    
    --secondary: #074E8C;
    --secondary-light: #4CB1FF;
    
    --error: #D0454C;
    --error-light: #E8EDF9;
    
    --text: #333333;
    --text-light: #708090;
    --text-input: #969DA3;
    
    --background: #FFFFFF;
    --background-light: #F0F4F9;
    
    --white: #FFFFFF;
    --gray-50: #F0F4F9;
    --gray-100: #E5F2FF;
    --gray-200: #708090;
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
    font-family: 'Outfit', sans-serif;
    line-height: 1.2;
  }

  h1 {
    font-size: 4rem;
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
