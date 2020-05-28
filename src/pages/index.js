import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/about/">About</Link>
      <Link to="/software/">Software</Link>
      <Link to="/photography/">Photography</Link>
    </Layout>
  )

}

export default IndexPage
