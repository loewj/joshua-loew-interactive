import styled from "styled-components"

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuIcon = styled.div`
  width: 20%;
  padding-left: 1rem;
  svg {
    cursor: pointer;
  }
  fill: ${props => props.theme.secondaryRectColor};
`

export const NavHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  font-style: italic;
  color: ${props => props.theme.secondaryTextColor};
`

export const BookEnd = styled.div`
  width: 20%;
`
