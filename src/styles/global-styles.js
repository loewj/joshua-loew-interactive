import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import styled from "styled-components"

import pelxRegular from '@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2';
import pelxThinItalic from '@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-ThinItalic.woff2';
import pelxLightItalic from '@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-LightItalic.woff2';
import pelxThin from '@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Thin.woff2';
import pelxSemiBoldItalic from '@ibm/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-SemiBoldItalic.woff2';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'IBM Plex Sans';
    src: url(${pelxRegular}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Sans Thin Italic';
    src: url(${pelxThinItalic}) format('woff2');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'IBM Plex Sans Light Italic';
    src: url(${pelxLightItalic}) format('woff2');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'IBM Plex Sans Thin';
    src: url(${pelxThin}) format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBM Plex Semi Bold Italic';
    src: url(${pelxSemiBoldItalic}) format('woff2');
    font-weight: 300;
    font-style: bold;
  }

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
  
`

export const Button = styled.button`

  cursor: pointer;
  font-style: italic;
  padding: 1rem;
  border: none;
  display: block;
  width: 50%;
  border-radius: 5px;
  background-color: ${props => props.theme.clickableColor};

  @media only screen and (max-width: 950px) {
    width: 100%;
  }

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
