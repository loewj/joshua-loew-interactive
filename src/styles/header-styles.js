import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuIcon = styled.div`
  width: 20%;
  /* padding-left: 1rem; */
  .menu-open, .menu-close {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    color: ${props => props.theme.secondaryRectColor};
    fill: ${props => props.theme.secondaryRectColor};
    cursor: pointer;
  }
  .menu-open {
    background-color: ${props => props.theme.secondaryRectColor};
  }
`

export const CloseContainer = styled(motion.div)`

`

export const NavHeader = styled.h1`

@media only screen and (max-width: 450px) {
  font-size: 2rem;
  }

  font-size: 3rem;
  font-weight: 400;
  font-style: italic;
  color: ${props => props.theme.secondaryTextColor};
`

export const BookEnd = styled.div`
  width: 20%;
`
