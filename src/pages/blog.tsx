import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogEntryContainer, BlogCard } from "../styles/blog-styles"
import { useGlobalDispatchContext } from "../context/global-context"
import { StyledP } from "../styles/global-styles"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            title
            description
            slug
            publishedAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges

  const dispatch = useGlobalDispatchContext()
  useEffect(() => {
    dispatch({ type: "TOGGLE_THEME", theme: "blog" })
  })

  return (
    <Layout>
      <SEO title="Blog" />
      {posts.map(({ node: post }, index) => {
        return (
          <Link to={`/blog/${post.slug}`} key={index}>
            <BlogCard style={{ padding: "1rem" }}>
              <span style={{ fontStyle: "italic" }}>{post.publishedAt}</span>
              <h1>{post.title}</h1>
              <div>
                <StyledP>{post.description}</StyledP>
              </div>
            </BlogCard>
          </Link>
        )
      })}
    </Layout>
  )
}

export default BlogPage
