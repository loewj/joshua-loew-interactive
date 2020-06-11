import styled /*css*/ from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  height: 93vh;
  @media (max-height: 600px) {
    height: 90vh;
  }
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  max-height: 100%;
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const SVGContainer = styled.div`
  z-index: -100;
  width: 100%;
  height: 100%;
  overflow: auto;
  bottom: 0;
  left: 0;
  position: absolute;
  display: flex;
  svg {
    /* flex-grow: 1; */
    /* margin-top: auto; */
  }
  /* fill: ${props => props.theme.primaryRectColor}; */
`

export const Main = styled(motion.main)`
  max-height: inherit;
  flex-grow: 1;
  overflow: auto;
  overflow-x: hidden;
`

export const ChildContainer = styled.div`
  /* overflow-y: hidden; */
  padding: 3rem;
  fill: ${props => props.theme.primaryTextColor};
`
