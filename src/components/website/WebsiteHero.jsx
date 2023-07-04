import React from 'react'
import MobileImg from '../../assets/images/mob-img.png'
import './WebsiteHero.css'
import WebButton from '../button/WebButton'
import MoblieScroll from '../../assets/images/es-mob.png' 
const WebsiteHero = () => {
  return (
    <div className='web__hero'>
        <div className="web__hero_left">
            
            {/* <img className='fixed__img' src={MoblieScroll} alt="" width={250} /> */} 
            <img className='web__hero_img' src={MobileImg} alt="" width={220} />
        </div>
        <div className="web__hero_right">
          <span className="web__hero_text">
          Boost your exposure with our Artist Websites and unlock opportunities to connect with devoted fans and influential music representatives.
          </span>
          <span className="web__hero_sub_text">
          Claim your online spotlight. Build your artist or band page
          </span>
          <div className="web__btn_container">
            <WebButton title={'contact'} color1={'blue'} color2={'black'} degree={112} textColor={'white'} />
            <WebButton title={'contact'} color1={'white'} color2={'grey'} degree={112} textColor={'blue'} />
          </div>
        </div>
    </div>
  )
}

export default WebsiteHero