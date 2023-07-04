import React from 'react'
import './Home.css'
import Slider from '../../components/slider/Slider'
import Logo from '../../components/streaming-logos/Logo'
import Service from '../../components/service/Service'
import VideoTour from '../../components/video-tour/VideoTour'
import ParallaxEffect from '../../components/parallax/ParallaxEffect'
import Testimonials from '../../components/testimonials/Testimonials'
import CTA from '../../components/cta/CTA'
import Booking from '../../components/booking/Booking'
import Services from '../../components/service/Services'
import ParrallaxEffect2 from '../../components/parallax/ParrallaxEffect2'

const Home = () => {
  return (
    <div>
      <Slider />
      <Booking />
      <ParrallaxEffect2 />
      <Logo />
      {/* <VideoTour /> */}
      <Services />
      <ParallaxEffect />
      <Testimonials />
      <CTA />
    </div>

  )
}

export default Home