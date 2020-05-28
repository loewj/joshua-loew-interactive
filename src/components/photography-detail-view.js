import React from "react"
import Image from "gatsby-image"

// import Image from 'gatsby-image';

const PhotographyDetailView = ({ title, description, imageURL }) => (
  <div className="photography-detail-preview">
      <Image fluid={imageURL} alt={title} />
    <p>{title} : {description}</p>
  </div>
)

export default PhotographyDetailView
