import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { useGlobalDispatchContext, useGlobalStateContext } from "../context/global-context"

const IndexPage = () => {

  const dispatch = useGlobalDispatchContext();
  const {currentTheme} = useGlobalStateContext();

  const toggleTheme = (changeTo) => {
    if (currentTheme !== changeTo) {
      dispatch({type: "TOGGLE_THEME", theme: changeTo});
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Link onClick={() => toggleTheme('about')} to="/about/">About</Link>
      <Link onClick={() => toggleTheme('software')} to="/software/">Software</Link>
      <Link onClick={() => toggleTheme('photo')} to="/photography/">Photography</Link>
    </Layout>
  )

}

export default IndexPage
