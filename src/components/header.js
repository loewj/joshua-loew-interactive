import PropTypes from "prop-types"
import React from "react"
import {useGlobalStateContext} from '../context/global-context' 

import {HeaderWrapper, MenuIcon} from '../styles/header-styles'

const Header = ({ siteTitle }) => {

  // access the global state context to change the theme of our app (eg when the user changes pages)
  const {currentTheme} = useGlobalStateContext();

  return (
    <HeaderWrapper>
      <MenuIcon>
        {console.log(currentTheme)}
        <svg
          className="menu-open"
          label="Open menu"
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g color="#E91E63">
            <rect fill="currentcolor" width="30" height="30" rx="5" />
          </g>
        </svg>
      </MenuIcon>
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
