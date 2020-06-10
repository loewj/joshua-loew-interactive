import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogEntryContainer } from "../styles/blog-styles"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <SEO title="Blog" />
      {posts.map(({ node: post }, index) => {

        return (
          <BlogEntryContainer>
            <h1>{post.title}</h1>
            <p>{post.publishedAt}</p>
            <Link to={`/blog/${post.slug}`}>View</Link>
          </BlogEntryContainer>
        )
      })}
    </Layout>
  )
}

export default BlogPage
