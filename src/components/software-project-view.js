import React from "react"
import { ProjectWrapper } from "../styles/software-styles"
// import Image from 'gatsby-image';

const SoftwareProjectView = ({ title, description, launchURL, tech }) => (
  <ProjectWrapper>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>Built with: <span>{tech.join(" | ")}</span></p>
    {launchURL.length > 0 && (
      <a style={{textDecoration: "underline"}} href={`${launchURL}`} target="_blank" rel="noreferrer">
        Launch
      </a>
    )}
  </ProjectWrapper>
)

export default SoftwareProjectView
