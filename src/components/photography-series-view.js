import React from 'react';
import { Link } from "gatsby"
import Image from 'gatsby-image'

// import Image from 'gatsby-image';

const PhotographySeriesView = ({title, description, coverImage, slug}) => (
    <div className="photography-series-preview">
        <h1>{title}</h1>
        <p>{description}</p>
        <Image fluid={coverImage} alt={title} />
        <Link to={`/${slug}/`}>View</Link>
    </div>
)

export default PhotographySeriesView;