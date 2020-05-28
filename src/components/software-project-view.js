import React from 'react';
// import Image from 'gatsby-image';

const SoftwareProjectView = ({title, description, launchURL}) => (
    <div className="software-project-preview">
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={`${launchURL}`} target="_blank" rel="noreferrer">Launch</a>
    </div>
)

export default SoftwareProjectView;