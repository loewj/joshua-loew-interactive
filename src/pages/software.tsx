import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo';
import SoftwareProjectView from '../components/software-project-view';

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

  return (
    <Layout>
      <SEO title="Photography" />
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