import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { TileContainer, SeriesCard } from "../styles/photography-styles"
import { StyledP } from "../styles/global-styles"

const PhotographySeriesView = ({ title, description, slug, coverImageURL }) => {
  return (
    <Link to={`/photography/${slug}/`}>
      <SeriesCard>
        <div className={"left"}>
          <TileContainer>
            <h1>
              {title}
            </h1>
            <StyledP>{description}</StyledP>
          </TileContainer>
        </div>
        <div className={"right"}>
          <Image fluid={coverImageURL} />
        </div>
      </SeriesCard>
    </Link>
  )
}

export default PhotographySeriesView
