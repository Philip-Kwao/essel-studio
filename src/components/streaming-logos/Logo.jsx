import React from 'react'
import './Logo.css'
import Amazon from '../../assets/images/audio-logos/amazon-music-b.svg'
import Apple from '../../assets/images/audio-logos/apple-b.svg'
import Audiomack from '../../assets/images/audio-logos/audiomack.png'
import Boomplay from '../../assets/images/audio-logos/boomplay.png'
import Deezer from '../../assets/images/audio-logos/deezer-b.svg'
import Spotify from '../../assets/images/audio-logos/spotify-b.svg'
import Tiktok from '../../assets/images/audio-logos/tik-b.svg'
import Vevo from '../../assets/images/audio-logos/vevo.svg'
import Youtube from '../../assets/images/audio-logos/yt.png'


const Logo = () => {
  return (
    <div className='stream__logo_container'>
        <img className='stream__logo' src={Amazon} alt={Amazon} />
        <img className='stream__logo' src={Apple} alt={Apple} />
        <img className='stream__logo' src={Audiomack} alt={Audiomack} />
        <img className='stream__logo' src={Boomplay} alt={Boomplay} />
        <img className='stream__logo' src={Deezer} alt={Deezer} />
        <img className='stream__logo' src={Spotify} alt={Spotify} />
        <img className='stream__logo' src={Tiktok} alt={Tiktok} />
        <img className='stream__logo' src={Vevo} alt={Vevo} />
        <img className='stream__logo' src={Youtube} alt={Youtube} />
    </div>
  )
}

export default Logo