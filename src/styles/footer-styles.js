import styled from "styled-components"
import { motion } from "framer-motion"

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: ${props => props.theme.iconColor};
`

export const IconAnimateContainer = styled(motion.div)`
    cursor: pointer;
    margin: auto; 
`