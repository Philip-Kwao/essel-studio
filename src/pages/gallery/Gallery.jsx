import React from 'react'
import './Gallery.css'
import Photos from '../../components/photos/Photos'
import Testimonials from '../../components/testimonials/Testimonials'
import CTA from '../../components/cta/CTA'

const Gallery = () => {
  return (
    <div className='gallery__container'>
      <Photos />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Gallery