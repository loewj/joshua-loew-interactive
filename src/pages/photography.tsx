import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import PhotographySeriesView from "../components/photography-series-view"

const PhotographyPage = () => {

  const data = useStaticQuery(graphql`
  {
    allPhotographySeriesJson {
      edges {
        node {
          title,
          description,
          slug,
          coverImageURL {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `)

  const photoSeries = data.allPhotographySeriesJson.edges;

  return (
    <Layout>
      <SEO title="Photogrphy" />
      <h1>Photography</h1>
      {photoSeries.map(({node: series}, index) => {

        const title = series.title;
        const description = series.description;
        const coverImageURL = series.coverImageURL.childImageSharp.fluid
        const slug = series.slug

        return (
          <PhotographySeriesView
            key={index}
            title={title}
            description={description}
            coverImage={coverImageURL}
            slug={slug}
          ></PhotographySeriesView>
        )

      })}
      <Link to="/">Back</Link>
    </Layout>
  )
}

export default PhotographyPage
