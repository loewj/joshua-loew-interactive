import styled from "styled-components"

export const ButtonContainer = styled.div`
  button {
    background: none;
    margin-right: 1rem;
    color: ${props => props.theme.clickableColor};
    cursor: pointer;
    border: none;
    text-align: center;
    font-size: 2rem;
    outline: 0;
  }
  .active {
    text-decoration: underline;
  }
  .inactive {
    font-style: italic;
  }
`

export const PhotoCaption = styled.div`
  p.title span {
    font-weight: 700;
    text-transform: uppercase;
  }
`
