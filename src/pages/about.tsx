// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Signature, AboutContainer, TextContainer } from "../styles/about-styles"
import { StyledP } from "../styles/global-styles"

const AboutPage = (props: PageProps) => {
  // fetch the text for the about page
  const data = useStaticQuery(graphql`
    {
      allDataJson {
        edges {
          node {
            text
            signature
          }
        }
      }
    }
  `)

  const introText = data.allDataJson.edges[0].node

  return (
    <Layout location={props.location}>
      <SEO title="About" />
      <AboutContainer>
        <TextContainer>
          {introText.text.map((el, index) => {
            return <StyledP key={index}>{el}</StyledP>
          })}
        </TextContainer>

        <Signature>{introText.signature}</Signature>
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage
