import React, { useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { motion } from "framer-motion"

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
import { AnimatePresence } from "framer-motion"

const Layout = ({ children, location }) => {
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
    secondaryTextColor: "#2f2f2f",
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

  const currentTheme = location.pathname.split("/")[1]

  let theme
  let headerTitle = "welcome"

  if (navOpen) {
    theme = redTheme
    headerTitle = "menu"
  } else {
    switch (currentTheme) {
      case "about":
        theme = blueTheme
        headerTitle = "about"
        break
      case "photography":
        theme = blackTheme
        headerTitle = "photo"
        break
      case "software":
        theme = greenTheme
        headerTitle = "software"
        break
      case "blog":
        theme = cobaltTheme
        headerTitle = "blog"
        break
      case "404":
        theme = yellowTheme
        headerTitle = "404"
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

  const backgroundVariants = {
    navOpen: { fill: theme.primaryRectColor, transition: { duration: 0.3 } },
    contentShown: {
      fill: theme.primaryRectColor,
      transition: { duration: 0.3 },
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
              <motion.rect
                animate={navOpen ? "navOpen" : "contentShown"}
                variants={backgroundVariants}
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
              <ChildContainer>
                <Header
                  navIsOpen={navOpen}
                  toggleNav={toggleNav}
                  headerTitle={headerTitle}
                />
                {!navOpen && children}
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
