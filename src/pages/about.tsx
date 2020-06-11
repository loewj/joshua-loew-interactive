// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { TextBlock, Signature, AboutContainer, TextContainer } from "../styles/about-styles"
import {
  useGlobalDispatchContext
} from "../context/global-context"

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

  const dispatch = useGlobalDispatchContext()
  dispatch({ type: "TOGGLE_THEME", theme: "about" })

  return (
    <Layout>
      <SEO title="About" />
      <AboutContainer>
        <TextContainer>
          {introText.text.map((el, index) => {
            return <TextBlock key={index}>{el}</TextBlock>
          })}
        </TextContainer>

        <Signature>{introText.signature}</Signature>
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage
