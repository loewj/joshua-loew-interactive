/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import "./src/styles/global.scss"
import React from "react"
import { GlobalProvider } from "./src/context/global-context"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}