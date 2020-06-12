import React, {useEffect} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PhotographyDetailView from "../components/photography-detail-view"
// import { motion } from "framer-motion"
import Back from "../images/svg/icons/back.svg"
import { BackButtonContainer } from "../styles/photography-styles"
import {
  useGlobalDispatchContext
} from "../context/global-context"

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

  const dispatch = useGlobalDispatchContext()
  useEffect(() => {
    dispatch({ type: "TOGGLE_THEME", theme: "photo" })
  })

  return (
    <Layout>
      <BackButtonContainer>
        <Link to="/photography/" state={{ fromSeries: true }}>
            <Back width="30" />
        </Link>
      </BackButtonContainer>
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
    </Layout>
  )
}

export default SeriesTemplate
