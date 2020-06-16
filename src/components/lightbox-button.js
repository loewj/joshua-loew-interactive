import React from "react"
import { useLightbox } from "simple-react-lightbox"

import { Button } from "../styles/global-styles"

const SRLButton = props => {
  const { openLightbox } = useLightbox()

  return (
    <Button onClick={() => openLightbox(props.imageToOpen)}>View Series</Button>
  )
}

export default SRLButton
