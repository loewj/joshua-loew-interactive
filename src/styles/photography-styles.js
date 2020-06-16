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
    font-weight: 200;
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

export const SeriesImageContainer = styled.div`
  margin: auto;
  img {
    border: 5px solid #000;
    border-radius: 5px;
  }
  span {
    text-transform: uppercase;
    font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 60%;
  }
`

export const BackButtonContainer = styled.div`
  svg {
    fill: ${props => props.theme.primaryTextColor};
  }
`

export const LandscapeWrapper = styled.div`
  margin-top: 3rem;
  ul {
    padding: 0;
    width: 90%;
    margin: auto;
  }
`

export const SeriesCard = styled.div`

  margin: 1rem;
  display: flex;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }

  background: #181818;
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }

  .left {
    flex: 1;
  }

  .right {
    flex: 1;
  }

  h1 {
    font-weight: 100;
  }

`

export const LandscapeCard = styled.div`
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

  margin-bottom: 10px;

  /* Otherwise, images overflow on mobile */
  @media only screen and (max-width: 450px) {
    img {
      width: 250px;
    }
  }
`

/* Add some padding inside the card container */
export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`
