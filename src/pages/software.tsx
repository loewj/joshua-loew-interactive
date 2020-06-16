import React from 'react';
import { useStaticQuery, graphql, PageProps } from "gatsby"
import Layout from '../components/layout';
import SEO from '../components/seo';
import SoftwareProjectView from '../components/software-project-view';

const SoftwarePage = (props: PageProps) => {

    const data = useStaticQuery(graphql`
    {
      allSoftwareProjectsJson {
        edges {
          node {
            title,
            description,
            launchURL,
            tech
          }
        }
      }
    }
  `)

  const softwareProjects = data.allSoftwareProjectsJson.edges;

  return (
    <Layout location={props.location}>
      <SEO title="Software" />
      {softwareProjects.map(({node: project}, index) => {

        const title = project.title
        const description = project.description
        const launchURL = project.launchURL
        const tech = project.tech

        return (
          <SoftwareProjectView
            key={index}
            title={title}
            description={description}
            launchURL={launchURL}
            tech={tech}
          ></SoftwareProjectView>
        )

      })}
    </Layout>
  )

}

export default SoftwarePage