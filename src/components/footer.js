import React from "react"
import Github from "../images/svg/icons/github.svg"
import Gmail from "../images/svg/icons/gmail.svg"
import Instagram from "../images/svg/icons/instagram.svg"
import LinkedIn from "../images/svg/icons/linkedin.svg"
import {
  FooterWrapper,
  IconAnimateContainer,
} from "../styles/footer-styles"

const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <IconAnimateContainer
          whileHover={{ scale: 1.2, rotate: 10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <a href="https://github.com/loewj" target="_blank" rel="noreferrer"><Github height="30" /></a>
        </IconAnimateContainer>
        <IconAnimateContainer
          whileHover={{ scale: 1.2, rotate: -10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <a href="mailto:loewjc@gmail.com" target="_blank" rel="noreferrer"><Gmail height="30" /></a>
        </IconAnimateContainer>
        <IconAnimateContainer
          whileHover={{ scale: 1.2, rotate: 10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <a href="https://www.instagram.com/joshualoew/" target="_blank" rel="noreferrer"><Instagram height="30" /></a>
        </IconAnimateContainer>
        <IconAnimateContainer
          whileHover={{ scale: 1.2, rotate: -10 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
        >
          <a href="https://www.linkedin.com/in/joshua-loew-358258110/" target="_blank" rel="noreferrer"><LinkedIn height="30" /></a>
        </IconAnimateContainer>
        {/* <div>© {new Date().getFullYear()}</div> */}
      </FooterWrapper>
    </footer>
  )
}

export default Footer
