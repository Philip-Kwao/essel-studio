import React from 'react'
import './About.css'
import AboutHero from '../../components/about-hero/AboutHero'
import AboutCard from '../../components/about-card/AboutCard'
import WhoWeAre from '../../components/who-we-are/WhoWeAre'
import CTA from '../../components/cta/CTA'
import ParallaxEffect from '../../components/parallax/ParallaxEffect'
import ParrallaxEffect2 from '../../components/parallax/ParrallaxEffect2'

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutCard />
      <WhoWeAre />
      <ParrallaxEffect2 />
      <ParallaxEffect />
      <CTA />

    </div>
  )
}

export default About