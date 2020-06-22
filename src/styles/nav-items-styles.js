import styled from "styled-components"
import { motion } from "framer-motion"

export const MenuItemsWrapper = styled(motion.div)`

  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  height: 30vh;

  @media only screen and (max-width: 1124px) {
    flex-direction: column;
    margin-top: 3rem;
    .slash {
      display: none;
    }
  }

  a {
    font-family: 'IBM Plex Sans Thin Italic';
    font-size: 3rem;
  }
  .active {
    font-family: "IBM Plex Semi Bold Italic";
  }
  span {
    font-size: 3rem;
    font-family: 'IBM Plex Sans Thin Italic';
  }
`
