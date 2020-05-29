import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
    padding: 1.5rem;
    height: 95vh;
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    max-height: 100%;
    overflow-y: scroll;
    flex-grow: 1;
    position: relative;
`

export const SVGContainer = styled.div`
    z-index: -100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
`