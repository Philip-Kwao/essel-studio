import React from 'react'
import './MainService.css'
import Service from '../../components/service/Service'
import Services from '../../components/service/Services'
import ParrallaxEffect2 from '../../components/parallax/ParrallaxEffect2'
import CTA from '../../components/cta/CTA'

const MainService = () => {
  return (
    <div className='main__service_container'>
      <Service />
      <ParrallaxEffect2 />
      <Services />
      <CTA />
    </div>
  )
}

export default MainService