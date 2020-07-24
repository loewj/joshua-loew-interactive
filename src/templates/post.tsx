import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Back from "../images/svg/icons/back.svg"
import { BackButtonContainer } from "../styles/photography-styles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import {
  BlogPhotoContainer,
  PostContainer,
  BackButton,
} from "../styles/blog-styles"
import { motion } from "framer-motion"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description
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
      if (node.data.target.fields) {
        const fields = node.data.target.fields
        return (
          <BlogPhotoContainer>
            <img alt={fields.title["en-US"]} src={fields.file["en-US"].url} />
            <div className={"caption"}>
              <p>
                <span className={"title"}>{fields.title["en-US"].toUpperCase()}</span>
                <span> | {fields.description["en-US"]}</span>
              </p>
            </div>
          </BlogPhotoContainer>
        )
      }
    },
  },
}

const PostTemplate = ({ location, data }) => {
  const post = data.contentfulBlogPost

  const title = post.title
  const description = post.description
  const publishedAt = post.publishedAt
  const body = post.body.json

  return (
    <Layout location={location}>
      <SEO title="Blog Post" description={description} />
      <BackButtonContainer>
        <Link to="/blog/" state={{ fromSeries: true }}>
          <BackButton whileHover={{ scale: 1.2 }}>
            <Back width="30" />
          </BackButton>
        </Link>
      </BackButtonContainer>
      <h1>{title}</h1>
      <p>{publishedAt}</p>
      <PostContainer>{documentToReactComponents(body, options)}</PostContainer>
    </Layout>
  )
}

export default PostTemplate
