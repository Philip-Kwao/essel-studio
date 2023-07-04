import React from 'react'
import './MusicPromotion.css'
import MusicPromo from '../../components/music-promo/MusicPromo'
import PromoService from '../../components/promo-service/PromoService'
import ScreenSlash from '../../components/screen-slash/ScreenSlash'
import Spotify from '../../components/spotify/Spotify'
import Tiktok from '../../components/tiktok/Tiktok'
import CTA from '../../components/cta/CTA'

const MusicPromotion = () => {
  return (
    <div className='music__promotion_container'>
      <MusicPromo />
      <PromoService />
      <ScreenSlash 
          slash={'0 140px,100% 0,100% 100%,0 100%'}
          top={-9}
          bgColor={'white'}
        />
        <Spotify />
        <ScreenSlash 
          slash={'100% 0%, 0% 10%, 100.1% 100.3%'}
          top={-1}
          bgColor={'white'}
        />
        <Tiktok />
        <CTA />
    </div>
  )
}

export default MusicPromotion