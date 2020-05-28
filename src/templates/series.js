import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PhotographyDetailView from "../components/photography-detail-view"

export const query = graphql`
  query($slug: String!) {
    photographySeriesJson(slug: { eq: $slug }) {
      title
      description
      images {
        title
        description
        URL {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const SeriesTemplate = ({ data }) => {
  const series = data.photographySeriesJson

  const title = series.title
  const description = series.description
  const images = series.images

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{description}</p>

      {images.map((image, index) => {
        const title = image.title
        const description = image.description
        const imageURL = image.URL.childImageSharp.fluid
        return (
          <PhotographyDetailView
            key={index}
            title={title}
            description={description}
            imageURL={imageURL}
          ></PhotographyDetailView>
        )
      })}
      <Link to="/photography/">Back</Link>
    </Layout>
  )
}

export default SeriesTemplate
