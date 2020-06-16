import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageProps } from "gatsby"

const NotFoundPage = (props: PageProps) => {

  return (
    <Layout location={props.location}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>How'd you get here?</p>
    </Layout>
  )

}

export default NotFoundPage
