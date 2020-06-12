import React, { useState, useEffect } from "react"
import Masonry from "react-masonry-component"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { motion, AnimatePresence } from "framer-motion"
// import Image from "../components/image"
import SEO from "../components/seo"
import PhotographySeriesView from "../components/photography-series-view"
import {
  ButtonContainer,
  PhotoCaption,
  LandscapeWrapper,
  LandscapeCard,
} from "../styles/photography-styles"

import { SRLWrapper } from "simple-react-lightbox"

import { useGlobalDispatchContext } from "../context/global-context"

const PhotographyPage = ({ location }) => {
  const photoData = useStaticQuery(graphql`
    {
      allPhotographySeriesJson {
        edges {
          node {
            title
            description
            slug
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
      allLandscapePhotosJson {
        edges {
          node {
            title
            description
            format
            imageURL {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
              childImageSharp {
                fixed(width: 300, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  const dispatch = useGlobalDispatchContext()
  useEffect(() => {
    dispatch({ type: "TOGGLE_THEME", theme: "photo" })
  })

  const photoSeries = photoData.allPhotographySeriesJson.edges
  const landscapePhotos = photoData.allLandscapePhotosJson.edges

  const viewing =
    location.state && location.state.fromSeries ? "SERIES" : "LANDSCAPE"
  const [selectedGallery, selectGallery] = useState(viewing)

  const masonryOptions = {
    transitionDuration: 0,
    gutter: 10,
  }

  const options = {
    settings: {
      overlayColor: "rgb(0, 0, 0)",
      autoplaySpeed: 7000,
      transitionSpeed: 1000,
    },
    caption: {
      captionFontWeight: "300",
    },
    buttons: {
      showDownloadButton: false,
      showThumbnailsButton: false,
      showFullscreenButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  }

  const landscapeElements = landscapePhotos.map(
    ({ node: landscape }, index) => {
      const title = landscape.title
      const imageURL = landscape.imageURL.childImageSharp.fluid
      const thumbURL = landscape.imageURL.childImageSharp.fixed

      return (
        <LandscapeCard>
          <a
            key={index}
            href={imageURL.src}
            data-attribute="SRL"
          >
            <img src={thumbURL.src} alt={title} width={300} />
          </a>
        </LandscapeCard>
      )
    }
  )

  const seriesElements = photoSeries.map(({ node: series }, index) => {
    const title = series.title
    const description = series.description
    const coverImageURL = series.coverImageURL.childImageSharp.fluid
    const slug = series.slug

    return (
      <PhotographySeriesView
        key={index}
        title={title}
        description={description}
        coverImageURL={coverImageURL}
        slug={slug}
      ></PhotographySeriesView>
    )
  })

  const customCaptions = landscapePhotos.map(({ node: landscape }, index) => {
    const caption = (
      <PhotoCaption className="SRLCustomCaption">
        <p className="title">
          <span>{landscape.title}</span> | {landscape.format}
        </p>
        <p>{landscape.description}</p>
      </PhotoCaption>
    )
    return { id: index, caption: caption }
  })

  return (
    <Layout>
      <SEO title="Photogrphy" />

      <ButtonContainer>
        <button
          className={
            "btn " + (selectedGallery === "LANDSCAPE" ? "active" : "inactive")
          }
          onClick={() => selectGallery("LANDSCAPE")}
        >
          Landscapes
        </button>
        <button
          className={
            "btn " + (selectedGallery === "SERIES" ? "active" : "inactive")
          }
          onClick={() => selectGallery("SERIES")}
        >
          Series
        </button>
      </ButtonContainer>

      <AnimatePresence>
        {selectedGallery === "LANDSCAPE" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delayChildren: 0.5 }}
          >
            <LandscapeWrapper>
              <SRLWrapper options={options} customCaptions={customCaptions}>
                <Masonry
                  data-attribute="SRL"
                  className={"my-gallery-class"} // default ''
                  elementType={"ul"} // default 'div'
                  options={masonryOptions} // default {}
                  disableImagesLoaded={false} // default false
                  updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                  {landscapeElements}
                </Masonry>
              </SRLWrapper>
            </LandscapeWrapper>
          </motion.div>
        )}

        {selectedGallery === "SERIES" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delayChildren: 0.5 }}
            exit={{ opacity: 0 }}
          >
            {seriesElements}
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default PhotographyPage
