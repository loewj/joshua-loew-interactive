import PropTypes from "prop-types"
import React from "react"
import { motion } from "framer-motion"
import { useGlobalStateContext } from "../context/global-context"

import {
  HeaderWrapper,
  CloseContainer,
  MenuIcon,
  NavHeader,
  BookEnd,
} from "../styles/header-styles"

import Close from "../images/svg/icons/close.svg"

const Header = ({ navIsOpen, toggleNav }) => {
  // access the global state context to change the theme of our app (eg when the user changes pages)
  let { currentTheme } = useGlobalStateContext()
  if (navIsOpen) {
    currentTheme = "menu";
  }

  return (
    <HeaderWrapper>
      <MenuIcon>
        {navIsOpen && (
          <CloseContainer
            whileHover={{ scale: 1.2 }}
            onClick={() => toggleNav(!navIsOpen)}
            className={"menu-close"}
          >
            <Close width="30" />
          </CloseContainer>
        )}
        {!navIsOpen && (
          <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
            onClick={() => toggleNav(!navIsOpen)}
            className="menu-open"
            label="Open menu"
          ></motion.div>
        )}
      </MenuIcon>
      <NavHeader>{currentTheme}</NavHeader>
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
