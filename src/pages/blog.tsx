import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogCard } from "../styles/blog-styles"
import { StyledP, PageTitle } from "../styles/global-styles"

const BlogPage = (props: PageProps) => {
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

  return (
    <Layout location={props.location}>
      <SEO title="Blog" description={"Web development tutorials, camera talk, and cycling stories."} />
      
      <PageTitle>Tutorials and unsolicited opinions on a veriety of topics.</PageTitle>
      
      {posts.map(({ node: post }, index) => {
        return (
          <Link to={`/blog/${post.slug}`} key={index}>
            <BlogCard style={{ padding: "1rem" }}>
              <span>{post.publishedAt}</span>
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
