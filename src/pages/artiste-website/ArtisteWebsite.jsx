import React from 'react'
import './ArtisteWebsite.css'
import ArtisteWebsitePage from './ArtisteWebsitePage'
import GetSpotted from '../../components/get-spotted/GetSpotted'

import CTA from '../../components/cta/CTA'

const ArtisteWebsite = () => {
  return (
    <div className='artiste__website_container'>
        <ArtisteWebsitePage />
        <GetSpotted />
        <CTA />
    </div>
  )
}

export default ArtisteWebsite