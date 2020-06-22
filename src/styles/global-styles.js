import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import styled from "styled-components"

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

export const StyledP = styled.p`
  font-weight: 200;
`

export const Button = styled.button`
  cursor: pointer;
  font-style: italic;
  padding: 1rem;
  border: none;
  display: block;
  width: 100%;
  border-radius: 5px;
  background-color: ${props => props.theme.clickableColor};
`

export const PageTitle = styled.h1`
  font-weight: 200;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.secondaryTextColor};
`

export const NotFoundContainer = styled.div`
  text-align: center;
`