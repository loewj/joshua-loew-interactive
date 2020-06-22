import styled from "styled-components"

export const AboutContainer = styled.div``

export const TextContainer = styled.div``

export const Signature = styled.h2`
  margin-top: 3rem;
  font-family: "IBM Plex Sans Thin Italic";
`

export const ImageContainer = styled.div`

  margin-top: 3rem;

  display: flex;
  justify-content: space-around;

  .portrait {
    width: 25%;
    border: 5px solid #fff;
    border-radius: 5px;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    .portrait {
      margin-bottom: 1rem;
      width: 90%;
    }
  }

`
