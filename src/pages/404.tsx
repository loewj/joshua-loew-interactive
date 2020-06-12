import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  useGlobalDispatchContext
} from "../context/global-context"

const NotFoundPage = () => {

  const dispatch = useGlobalDispatchContext()
  dispatch({ type: "TOGGLE_THEME", theme: "404" })

  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>How'd you get here?</p>
    </Layout>
  )

}

export default NotFoundPage
