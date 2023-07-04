import React from 'react'
import './MusicPromo.css'
import PromoBg from '../../assets/images/mop-bg.png'
import Button from '../../components/button/Button'

const MusicPromo = () => {
  return (
    <div className='music__promo_container' style={{background:`url(${PromoBg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
      <div className="mp__container">
        <span className='mp__subtitle'>Resounding Faith: Promoting Gospel Music's Transformative Message</span>
        <h1>Revolutionizing Audio Streaming: Unleashing the Power of Music Distribution</h1>
        <Button title={'get in touch'} />
      </div>
    </div>
  )
}

export default MusicPromo