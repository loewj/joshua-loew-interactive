// Gatsby supports TypeScript natively!
import React, {useEffect} from "react"
import { PageProps } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Signature, AboutContainer, TextContainer } from "../styles/about-styles"
import {
  useGlobalDispatchContext
} from "../context/global-context"
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

  const dispatch = useGlobalDispatchContext()
  useEffect(() => {
    dispatch({ type: "TOGGLE_THEME", theme: "about" })
  })

  return (
    <Layout>
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
