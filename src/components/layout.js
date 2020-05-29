import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import { ThemeProvider } from "styled-components"
import {GlobalStyle} from '../styles/global-styles'
import {Container, Content, SVGContainer} from '../styles/layout-styles'

// import Logo from "../images/svg/logo/jl_logo.svg";
import Footer from "./footer"

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
    
  }

  const rectStyle = {
    fill: "#304ffe",
  }

  return (
    <ThemeProvider theme={blueTheme}>
      <GlobalStyle />
      <Container>
        <Content>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>
            {children}
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
                <rect
                  width="100%"
                  height="100%"
                  rx="3"
                  ry="3"
                  style={rectStyle}
                />
              </svg>
            </SVGContainer>
          </main>
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
