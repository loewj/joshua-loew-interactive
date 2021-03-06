import styled from "styled-components"
import { motion } from "framer-motion"

export const BlogPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    /* border: 5px solid #000; */
    border-radius: 3px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (min-width: 600px) {
      width: 35%;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .caption {
    text-align: center;
    .title {
      font-weight: bold;
    }
    p {
      display: inline-block;
    }
  }
`

export const BlogEntryContainer = styled.div`
  p {
    font-family: "IBM Plex Sans Thin Italic";
  }
`

export const PostContainer = styled.div`
  a {
    text-decoration: underline;
  }
`

export const BlogCard = styled.div`
  padding: 1rem;
  margin: 2rem;

  div {
    display: inline-block;
  }

  h1 {
    font-family: "IBM Plex Sans Thin";
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.3rem;
    }
  }

  span {
    font-family: "IBM Plex Sans Light Italic";
  }

  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }
`

export const BackButton = styled(motion.div)`
  display: inline-block;
`
