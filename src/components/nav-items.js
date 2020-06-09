import React from "react"
import { MenuItemsWrapper } from "../styles/nav-items-styles"
import { Link } from "gatsby"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/global-context"

const NavItems = () => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext()

  const toggleTheme = changeTo => {
    if (currentTheme !== changeTo) {
      dispatch({ type: "TOGGLE_THEME", theme: changeTo })
    }
  }

  return (
    <MenuItemsWrapper>
      <Link
        className={"first"}
        activeClassName="active"
        to="/"
        onClick={() => toggleTheme("welcome")}
        replace
      >
        Home
      </Link>
      <Link
        className={"first"}
        activeClassName="active"
        to="/about/"
        onClick={() => toggleTheme("about")}
        replace
      >
        About
      </Link>
      <Link
        className={"second"}
        activeClassName="active"
        to="/software/"
        onClick={() => toggleTheme("software")}
        replace
      >
        Software
      </Link>
      <Link
        className={"third"}
        activeClassName="active"
        to="/photography/"
        onClick={() => toggleTheme("photo")}
        replace
      >
        Photography
      </Link>
    </MenuItemsWrapper>
  )
}

export default NavItems
