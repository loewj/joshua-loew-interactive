import styled from "styled-components"

export const BlogPhotoContainer = styled.div`
  img {
    border: 5px solid #000;
    border-radius: 5px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const BlogEntryContainer = styled.div`
  p {
    font-style: italic;
  }
`

export const BlogCard = styled.div`

  div {
    display: inline-block;
  }
  
  h1 {
    font-weight: 100;
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
