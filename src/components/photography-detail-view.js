import React from "react"
import Image from "gatsby-image"
import { SeriesImageContainer } from "../styles/photography-styles"

// import Image from 'gatsby-image';

const PhotographyDetailView = ({ title, description, imageURL }) => (
  <SeriesImageContainer>
    <Image fluid={imageURL} alt={title} />
    <p>
      <span>{title}</span>: {description}
    </p>
  </SeriesImageContainer>
)

export default PhotographyDetailView
