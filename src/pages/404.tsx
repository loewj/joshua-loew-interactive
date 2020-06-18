import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageProps } from "gatsby"

const NotFoundPage = (props: PageProps) => {
  return (
    <Layout location={props.location}>
      <SEO title="404: Not found" description={"Page not found."} />
      <div style={{ textAlign: "center" }}>
        <h1>NOT FOUND</h1>
        <p>How'd you get here?</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
