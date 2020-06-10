import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Back from "../images/svg/icons/back.svg"
import { BackButtonContainer } from "../styles/photography-styles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import { BlogPhotoContainer } from "../styles/blog-styles"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedAt(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <BlogPhotoContainer>
          <img alt={node.data.target.fields.title['en-US']} src={node.data.target.fields.file['en-US'].url} />
        </BlogPhotoContainer>
      )
    },
  }
}

const PostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost

  const title = post.title
  const publishedAt = post.publishedAt
  const body = post.body.json

  return (
    <Layout>
      <BackButtonContainer>
        <Link to="/blog/" state={{ fromSeries: true }}>
          <Back width="30" />
        </Link>
      </BackButtonContainer>
      <h1>{title}</h1>
      <p>{publishedAt}</p>
      {documentToReactComponents(body, options)}
    </Layout>
  )
}

export default PostTemplate
