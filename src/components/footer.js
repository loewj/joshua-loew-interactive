import React from "react"
import {FooterWrapper} from '../styles/footer-styles'

const Footer = () => {

  return (
    <footer>
        <FooterWrapper>
            © {new Date().getFullYear()}
        </FooterWrapper>
    </footer>
  )

}

export default Footer
