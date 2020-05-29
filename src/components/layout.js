import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

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
import { GlobalStyle } from "../styles/global-styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const blueTheme = {
    primaryRectColor: "#304ffe",
    secondaryRectColor: "#7a7cff",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#0026ca",
    iconColor: "#000000",
    backgroundColor: "#ffffff",
  }

  return (
    <ThemeProvider theme={blueTheme}>
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
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <rect width="100%" height="100%" rx="3" ry="3" />
              </svg>
            </SVGContainer>
            <ChildContainer>
              <Header siteTitle={data.site.siteMetadata.title} />
              {children}
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
