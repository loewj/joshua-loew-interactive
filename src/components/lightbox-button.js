import React from 'react'
import { useLightbox } from 'simple-react-lightbox'

const SRLButton = props => {
  const { openLightbox } = useLightbox()

  return (
    <button
      onClick={() => openLightbox(props.imageToOpen)}
    >
      View Series
    </button>
  )
}

export default SRLButton