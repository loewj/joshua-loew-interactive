import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PhotographyDetailView from "../components/photography-detail-view"
import { motion } from "framer-motion"
import Back from "../images/svg/icons/back.svg"
import { BackButtonContainer } from "../styles/photography-styles"
import { useGlobalDispatchContext } from "../context/global-context"

export const query = graphql`
  query($slug: String!) {
    photographySeriesJson(slug: { eq: $slug }) {
      title
      description
      images {
        title
        caption
        src {
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
  const caption = series.caption
  const images = series.images

  const dispatch = useGlobalDispatchContext()
  useEffect(() => {
    dispatch({ type: "TOGGLE_THEME", theme: "photo" })
  })

  return (
    <Layout>
      <BackButtonContainer>
        <Link to="/photography/" state={{ fromSeries: true }}>
          <motion.div
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.2 }}
          >
            <Back width="30" />
          </motion.div>
        </Link>
      </BackButtonContainer>
      <h1>{title}</h1>
      <p>{caption}</p>

      {images.map((image, index) => {
        const title = image.title
        const description = image.description
        const imageSrc = image.src.childImageSharp.fluid
        return (
          <PhotographyDetailView
            key={index}
            title={title}
            description={description}
            imageURL={imageSrc}
          ></PhotographyDetailView>
        )
      })}
    </Layout>
  )
}

export default SeriesTemplate
