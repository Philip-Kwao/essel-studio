import React from 'react'
import { Parallax } from 'react-parallax'
import Button from '../button/Button'
import EsLogo from '../logo/EsLogo'
import Girl from '../../assets/images/es-6.jpg'
import './Parallax.css'
const ParrallaxEffect2 = () => {
  return (
    
    <Parallax
    blur={{ min:-15, max:15}}
    bgImage={Girl}
    bgImageAlt={Girl}
    strength={600}
  >
<div className='parallax__item'>
  <div className="parallax__2">
      <div className="parallax__text">
        <div className="parallax__instruments">
        <h2>rent instruments and instrumentalists from us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore id, dolorum ea voluptatem asperiores dolor eum magnam temporibus quo ex, tempore esse voluptas et alias maxime tenetur amet at adipisci.</p>

          <Button title={'get to our rental shop'} />
        </div>
      </div>
      <div className="parallax__logo_img">
        <span className='parallax__logo'>
          <EsLogo />
        </span>
      </div>
  </div>
</div>
</Parallax>
  )
}

export default ParrallaxEffect2