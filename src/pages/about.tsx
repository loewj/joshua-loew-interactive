// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Signature,
  AboutContainer,
  TextContainer,
  ImageContainer,
} from "../styles/about-styles"
import { StyledP } from "../styles/global-styles"
import Image from "gatsby-image"

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
      portrait1: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid
          }
        }
      }
      portrait2: file(relativePath: { eq: "me_2.jpg" }) {
        childImageSharp {
          fluid {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const introText = data.allDataJson.edges[0].node
  const portrait1 = data.portrait1.childImageSharp.fluid
  const portrait2 = data.portrait2.childImageSharp.fluid

  return (
    <Layout location={props.location}>
      <SEO title="About" />
      <AboutContainer>
        <TextContainer>
          <div className={"intro-text"}>
            {introText.text.map((el, index) => {
              return <StyledP key={index}>{el}</StyledP>
            })}
            <Signature>{introText.signature}</Signature>
          </div>
        </TextContainer>
        <ImageContainer>
          <Image className={"portrait"} fluid={portrait1} />
          <Image className={"portrait"} fluid={portrait2} />
        </ImageContainer>
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage
