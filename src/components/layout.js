import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import layoutStyles from "./layout.module.scss"

import Logo from "../images/svg/logo/jl_logo.svg";

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

    const rectStyle = {
      fill: "#304ffe",
    }

  return (
    <React.Fragment>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>
            {children}
            <Logo height="50" />
            <div className={layoutStyles.svg}>
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
                <rect width="100%" height="100%" rx="3" ry="3" style={rectStyle} />
              </svg>
            </div>
          </main>
        </div>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
