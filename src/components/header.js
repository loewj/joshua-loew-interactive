import PropTypes from "prop-types"
import React from "react"
import { motion } from "framer-motion"
import { useGlobalStateContext } from "../context/global-context"

import {
  HeaderWrapper,
  MenuIcon,
  NavHeader,
  BookEnd,
} from "../styles/header-styles"

const Header = ({ siteTitle }) => {
  // access the global state context to change the theme of our app (eg when the user changes pages)
  const { currentTheme } = useGlobalStateContext()

  console.log(siteTitle)

  return (
    <HeaderWrapper>
      <MenuIcon>
        {console.log(currentTheme)}
        <motion.svg
          whileHover={{ scale: 1.5, rotate: 90 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className="menu-open"
          label="Open menu"
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" rx="5" />
        </motion.svg>
      </MenuIcon>
      <NavHeader>hello</NavHeader>
      <BookEnd />
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
