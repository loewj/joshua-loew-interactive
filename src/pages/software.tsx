import React, {useEffect} from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo';
import SoftwareProjectView from '../components/software-project-view';
import {
  useGlobalDispatchContext
} from "../context/global-context"

const SoftwarePage = () => {

    const data = useStaticQuery(graphql`
    {
      allSoftwareProjectsJson {
        edges {
          node {
            title,
            description,
            launchURL
          }
        }
      }
    }
  `)

  const softwareProjects = data.allSoftwareProjectsJson.edges;

  const dispatch = useGlobalDispatchContext()
  useEffect(() => {
    dispatch({ type: "TOGGLE_THEME", theme: "software" })
  })

  return (
    <Layout>
      <SEO title="Software" />
      {softwareProjects.map(({node: project}, index) => {

        const title = project.title;
        const description = project.description;
        const launchURL = project.launchURL

        return (
          <SoftwareProjectView
            key={index}
            title={title}
            description={description}
            launchURL={launchURL}
          ></SoftwareProjectView>
        )

      })}
    </Layout>
  )

}

export default SoftwarePage