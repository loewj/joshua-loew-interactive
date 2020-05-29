import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
  text-decoration: none;
  box-sizing: border-box;
}

body {
  font-family: 'IBM Plex Sans';
}

body,html {
  margin: 0;
  padding: 0;
}

`