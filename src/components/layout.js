import React, {useState} from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { useGlobalStateContext } from "../context/global-context"

import Header from "./header"
// import { motion } from "framer-motion"

import { ThemeProvider } from "styled-components"
import {
  Container,
  Content,
  SVGContainer,
  ChildContainer,
  Main,
} from "../styles/layout-styles"

// import Logo from "../images/svg/logo/jl_logo.svg";
import Footer from "./footer"
import NavItems from "./nav-items"
import { GlobalStyle } from "../styles/global-styles"
import SimpleReactLightbox from "simple-react-lightbox";

const Layout = ({ children }) => {

  const blueTheme = {
    primaryRectColor: "#304ffe",
    secondaryRectColor: "#7a7cff",
    primaryTextColor: "#ffffff",
    clickableColor: "#7a7cff",
    secondaryTextColor: "#0026ca",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

  const blackTheme = {
    primaryRectColor: "#212121",
    secondaryRectColor: "#484848",
    primaryTextColor: "#ffffff",
    clickableColor: "#484848",
    secondaryTextColor: "#ffffff",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

  const greenTheme = {
    primaryRectColor: "#00c853",
    secondaryRectColor: "#5efc82",
    primaryTextColor: "#000000",
    clickableColor: "#5efc82",
    secondaryTextColor: "#009624",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

  const redTheme = {
    primaryRectColor: "#fa8a80",
    secondaryRectColor: "#ffffff",
    primaryTextColor: "#ffffff",
    clickableColor: "#000000",
    secondaryTextColor: "#ffffff",
    iconColor: "#ffffff",
    backgroundColor: "#000000",
  }

  const [navOpen, toggleNav] = useState(false);
  
  const { currentTheme } = useGlobalStateContext()
  let theme

  if (navOpen) {
    theme = redTheme;
  } else {
    switch (currentTheme) {
      case "photo":
        theme = blackTheme
        break
      case "software":
        theme = greenTheme
        break
      default:
        theme = blueTheme
        break
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          <Main>
            {/* <Logo height="50" /> */}
            <SVGContainer>
              <svg
                id="svgId"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <rect width="100%" height="100%" rx="3" ry="3" />
              </svg>
            </SVGContainer>
            <ChildContainer>
              <Header 
                navIsOpen={navOpen}
                toggleNav={toggleNav} />
                {!navOpen && (
                  <SimpleReactLightbox>
                    { children }
                  </SimpleReactLightbox>
                )}
                {navOpen && (
                  <NavItems></NavItems>
                )}
            </ChildContainer>
          </Main>
        </Content>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
