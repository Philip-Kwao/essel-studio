import React from 'react'
import WebsiteHero from '../../components/website/WebsiteHero'
import MoblieScroll from '../../assets/images/es-mob.png'
import './ArtisteWebsitePage.css'
import ScreenSlash from '../../components/screen-slash/ScreenSlash'
import ConnectEverything from '../../components/connect-everything/ConnectEverything'
import Promote from '../../components/promote/Promote'
import GetSpotted from '../../components/get-spotted/GetSpotted'
const ArtisteWebsitePage = () => {
  return (
    <div className='web__page_container'>
      <div className="web__page">
        <img className='fixed__img' src={MoblieScroll} alt="" width={250} />
        <WebsiteHero />
        <ScreenSlash 
          slash={'0 140px,100% 0,100% 100%,0 100%'}
          top={-9}
          bgColor={'white'}
        />
        <ConnectEverything />
        <ScreenSlash 
          slash={'100% 0%, 0% 0%, 100.1% 100.3%'}
          top={-0.1}
          bgColor={'white'}
        />
        <Promote />
        <ScreenSlash 
          slash={'0 140px,100% 0,100% 100%,0 100%'}
          top={-9}
          bgColor={'grey'}
        />
      </div>
    </div>
  )
}

export default ArtisteWebsitePage