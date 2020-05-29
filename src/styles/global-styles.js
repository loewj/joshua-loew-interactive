import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`

  ${normalize}

  * {
    text-decoration: none;
    box-sizing: border-box;
    // remove the cursor here
  }

  body {

    font-family: 'IBM Plex Sans';
    color: ${props => props.theme.primaryTextColor};

    a {
      color: ${props => props.theme.primaryTextColor};
    }

    background-color: ${props => props.theme.backgroundColor}
    
  }

  body,html {
    margin: 0;
    padding: 0;
  }

`