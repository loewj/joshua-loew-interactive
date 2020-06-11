import styled from "styled-components"

export const LandingWrapper = styled.div`

  /* margin-top: 10rem; */
  height: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 3rem;

  p {
    font-weight: 100;
    font-style: italic;
    font-size: 1.5rem;
    display: inline;
    :not(:last-child)::after {
      content: " • ";
    }
  }

  h1 {
      font-size: 3rem;
      font-weight: 400;
  }

`
