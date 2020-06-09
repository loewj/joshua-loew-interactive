import React from 'react';
import { Link } from "gatsby"

const PhotographySeriesView = ({title, description, slug}) => (
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={`/photography/${slug}/`}>View</Link>
    </div>
)

export default PhotographySeriesView;