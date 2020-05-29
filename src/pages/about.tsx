// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About" />
    <div>
      <h1>Hi from the about page</h1>
      <p>Welcome to page 2 ({props.path})</p>
      <Link to="/">Back</Link>
    </div>
  </Layout>
)

export default AboutPage
