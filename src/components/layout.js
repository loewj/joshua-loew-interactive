import React, { useState } from "react"
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
import SimpleReactLightbox from "simple-react-lightbox"
import { AnimatePresence } from "framer-motion"

const Layout = ({ children }) => {
  const tealTheme = {
    primaryRectColor: "#3f51b5",
    secondaryRectColor: "#757de8",
    primaryTextColor: "#ffffff",
    clickableColor: "#002984",
    secondaryTextColor: "#002984",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

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
    secondaryTextColor: "#000000",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

  const greenTheme = {
    primaryRectColor: "#66bb6a",
    secondaryRectColor: "#98ee99",
    primaryTextColor: "#000000",
    clickableColor: "#98ee99",
    secondaryTextColor: "#338a3e",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

  const redTheme = {
    primaryRectColor: "#fa8a80",
    secondaryRectColor: "#c85a54",
    primaryTextColor: "#000000",
    clickableColor: "#000000",
    secondaryTextColor: "#c85a54",
    iconColor: "#ffffff",
    backgroundColor: "#000000",
  }

  const cobaltTheme = {
    primaryRectColor: "#7986cb",
    secondaryRectColor: "#aab6fe",
    primaryTextColor: "#000000",
    clickableColor: "#aab6fe",
    secondaryTextColor: "#49599a",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

  const yellowTheme = {
    primaryRectColor: "#fbc02d",
    secondaryRectColor: "#fff263",
    primaryTextColor: "#000000",
    clickableColor: "#c49000",
    secondaryTextColor: "#c49000",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

  const [navOpen, toggleNav] = useState(false)

  const { currentTheme } = useGlobalStateContext() || {
    currentTheme: "welcome",
  }
  let theme

  if (navOpen) {
    theme = redTheme
  } else {
    switch (currentTheme) {
      case "about":
        theme = blueTheme
        break
      case "photo":
        theme = blackTheme
        break
      case "software":
        theme = greenTheme
        break
      case "blog":
        theme = cobaltTheme
        break
      case "404":
        theme = yellowTheme
        break
      default:
        theme = tealTheme
        break
    }
  }

  const duration = 0.5
  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: duration,
        when: "afterChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          <SVGContainer>
            <svg
              id="svgId"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <rect
                fill={theme.primaryRectColor}
                width="100%"
                height="100%"
                rx="3"
                ry="3"
              />
            </svg>
          </SVGContainer>
          <AnimatePresence>
            <Main
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {/* <Logo height="50" /> */}
              <ChildContainer>
                <Header navIsOpen={navOpen} toggleNav={toggleNav} />
                {!navOpen && (
                  <SimpleReactLightbox>{children}</SimpleReactLightbox>
                )}
                {navOpen && <NavItems></NavItems>}
              </ChildContainer>
            </Main>
          </AnimatePresence>
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
