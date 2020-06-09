import styled /*css*/ from "styled-components"

export const Container = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  height: 95vh;
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
  fill: ${props => props.theme.primaryRectColor};
`

export const Main = styled.main`
  max-height: inherit;
  flex-grow: 1;
  overflow: auto;
`

export const ChildContainer = styled.div`
  padding: 3rem;
  fill: ${props => props.theme.primaryTextColor};
`
