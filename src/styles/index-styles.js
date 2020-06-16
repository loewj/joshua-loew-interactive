import styled from "styled-components"
import { motion } from "framer-motion"

export const AnimatedLogo = styled(motion.svg)`
  width: 200px;
  height: 200px;
  @media only screen and (max-width: 400px) {
    width: 150px;
    height: 150px;
  }
`

export const LandingWrapper = styled.div`
  /* margin-top: 10rem; */
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 3rem;

  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 535px) {
    h1 {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .item {
    stroke: #fff;
    stroke-width: 2;
  }
`

export const BrandingWrapper = styled.div`
  p {
    margin-block-start: 0;
    margin-block-end: 0;
    font-weight: 100;
    font-style: italic;
    font-size: 1.5rem;

    @media only screen and (min-width: 535px) {
      display: inline;
      :not(:last-child)::after {
        content: " • ";
      }
    }
  }
`
