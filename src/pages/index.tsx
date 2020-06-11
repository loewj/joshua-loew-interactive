import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../images/svg/logo/jl_logo.svg"
import SEO from "../components/seo"
import { LandingWrapper } from "../styles/index-styles"
import {
  useGlobalDispatchContext
} from "../context/global-context"

const IndexPage = () => {

  const dispatch = useGlobalDispatchContext()
  dispatch({ type: "TOGGLE_THEME", theme: "welcome" })

  return (
    <Layout>
      <SEO title="Welcome" />
      <LandingWrapper>
        <Logo height="200" />
        <h1>Joshua Loew</h1>
        <div>
          <p>Developer</p>
          <p>Designer</p>
          <p>Photographer</p>
        </div>
      </LandingWrapper>
      
    </Layout>
  )
}

export default IndexPage
