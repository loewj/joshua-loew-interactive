import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { LandingWrapper, BrandingWrapper, AnimatedLogo } from "../styles/index-styles"
import { motion } from "framer-motion"
import { PageProps } from "gatsby"

const IndexPage = (props: PageProps) => {

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  }

  return (
    <Layout location={props.location}>
      <SEO title="Welcome" />
      <LandingWrapper>
        <AnimatedLogo
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 360 360"
        >
          <motion.path
            className={"item"}
            d="M175,7.3v345.4c0,4-3.3,7.3-7.3,7.3H7.3c-4,0-7.3-3.3-7.3-7.3v-39.4c0-4,3.3-7.3,7.3-7.3h106.4c4,0,7.3-3.3,7.3-7.3V7.3c0-4,3.3-7.3,7.3-7.3h39.4C171.7,0,175,3.3,175,7.3z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.5,
              default: { duration: 1, ease: "easeInOut" },
              fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 1.5},
            }}
          />
          <motion.path
            className={"item"}
            d={
              "M360,313.3v39.4c0,4-3.3,7.3-7.3,7.3H192.3c-4,0-7.3-3.3-7.3-7.3V7.3c0-4,3.3-7.3,7.3-7.3h39.4c4,0,7.3,3.3,7.3,7.3v291.4c0,4,3.3,7.3,7.3,7.3h106.4C356.7,306,360,309.3,360,313.3z"
            }
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.5,
              default: { duration: 1, ease: "easeInOut" },
              fill: { duration: 0.5, ease: [1, 0, 0.8, 1], delay: 1.5 },
            }}
          />
        </AnimatedLogo>

        <h1>Joshua Loew</h1>
        <BrandingWrapper>
          <p>Developer</p>
          <p>Designer</p>
          <p>Photographer</p>
        </BrandingWrapper>
      </LandingWrapper>
    </Layout>
  )
}

export default IndexPage
