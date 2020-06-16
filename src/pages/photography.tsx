import React, { useState, useEffect } from "react"
import Masonry from "react-masonry-component"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import { motion, AnimatePresence } from "framer-motion"
import SEO from "../components/seo"
import Image from "gatsby-image"
import {
  ButtonContainer,
  PhotoCaption,
  LandscapeWrapper,
  LandscapeCard,
  SeriesCard,
  TileContainer,
} from "../styles/photography-styles"

import SimpleReactLightbox, {
  SRLWrapper,
  useLightbox,
} from "simple-react-lightbox"
import { useGlobalDispatchContext } from "../context/global-context"
import { StyledP } from "../styles/global-styles"
import SRLButton from "../components/lightbox-button"

const PhotographyPage = ({ location }) => {
  const photoData = useStaticQuery(graphql`
    {
      allPhotographySeriesJson {
        edges {
          node {
            title
            description
            coverImageURL {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            images {
              title
              caption
              src {
                childImageSharp {
                  fluid {
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

  const { openLightbox } = useLightbox()
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
      // showThumbnailsButton: false,
      showFullscreenButton: false,
    },
    // thumbnails: {
    //   showThumbnails: true,
    // },
  }

  const landscapeElements = landscapePhotos.map(
    ({ node: landscape }, index) => {
      const title = landscape.title
      const imageURL = landscape.imageURL.childImageSharp.fluid
      const thumbURL = landscape.imageURL.childImageSharp.fixed

      return (
        <LandscapeCard key={index}>
          <a href={imageURL.src} data-attribute="SRL">
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
    const images = series.images.map(el => {
      return {
        src: el.src.childImageSharp.fluid.src,
        thumbnail: el.src.childImageSharp.fixed.src,
        caption: el.caption,
        width: 1920,
        height: "auto",
      }
    })

    return (
      <SimpleReactLightbox key={index}>
        <SeriesCard>
          <div className={"left"}>
            <TileContainer>
              <h1>{title}</h1>
              <StyledP>{description}</StyledP>
              <SRLButton />
            </TileContainer>
          </div>
          <div className={"right"}>
            <Image fluid={coverImageURL} />
          </div>
          <SRLWrapper images={images} options={options} />
        </SeriesCard>
      </SimpleReactLightbox>
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
              <SimpleReactLightbox>
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
              </SimpleReactLightbox>
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
