import React from 'react'
import './MusicDistribution.css'
import MusicDistHero from '../../components/music-dist/MusicDistHero'
import Logo from '../../components/streaming-logos/Logo'
import FreeDist from '../../components/music-dist/FreeDist'
import CTA from '../../components/cta/CTA'

import FreeImg from '../../assets/images/img.jpg'
import FreeImg2 from '../../assets/images/studio6.webp'
import FreeImg3 from '../../assets/images/studio3.jpg'
import FreeImg4 from '../../assets/images/es-5.jpg'
import FreeImg5 from '../../assets/images/img21.jpg'
import FreeImg6 from '../../assets/images/studio4.jpg'
import Button from '../../components/button/Button'

const MusicDistribution = () => {
  return (
    <div className='music__dist_container'>
        <MusicDistHero />

        <Logo />

        <FreeDist 
            subtitle={'how to distribute your music'}
            title={'Distribute your Music Using Free Music Distribution Services'}
            description={"Looking to reach your audience with your music? Music distribution is the key. Learn about its process, how to distribute your music, and free distribution services! It's about sending your mixed music to providers (streaming services, radio, ads) to connect with your future fans. Distribution allows listeners to discover and love your tunes. Wondering how to distribute your music? Read on! We'll cover digital distribution, free services for independent artists, and top online options. Global streaming revenue is set to hit $16.4bn this year, accounting for 56% of music sales in 2019. Don't miss out on selling your music and accessing the online fanbase."}
            bigImg={FreeImg}
            smallImg={FreeImg2}
            leftPosition={-20}
        />
        <FreeDist 
            subtitle={'how to distribute your music'}
            title={'How To Distribute Music'}
            description={"Music distribution trends have shifted to digital platforms, surpassing physical sales. Digital distributors are ideal for independent artists, as they are cost-effective and avoid restrictive record label contracts. Independent music distribution companies simplify the process. Streaming platforms prefer submissions through registered distributors. Music distribution services aim to get your music on popular platforms like Spotify, Apple Music, Deezer, Tidal, Amazon, and iTunes. Royalties are earned through downloads, streams, and purchases. Platforms offer different royalty rates."}
            bigImg={FreeImg}
            smallImg={FreeImg2}
            direct={innerWidth>900?'row-reverse':''}
            rightPosition={-20}
        />
        <FreeDist 
            subtitle={'how to distribute your music'}
            title={'online music distribution'}
            description={"In the realm of music, online distribution reigns supreme. The music distribution landscape has undergone significant transformations, democratizing the music industry in unforeseen ways. As musicians become savvier, music distributors are gradually prioritizing the interests of artists."}
            bigImg={FreeImg3}
            smallImg={FreeImg4}
            leftPosition={-20}
        />
        <FreeDist 
            subtitle={'how to distribute your music'}
            title={'Searching for a gospel recording studio which helps in promoting your music?'}
            description={"If you are searching for an all-in-one platform that caters to your needs, why not give Essel Studio a try? We offer a comprehensive range of services, including  music digital marketing, enhancing your streaming visibility. Experience the benefits by clicking the button below."}
            bigImg={FreeImg5}
            smallImg={FreeImg6}
            direct={innerWidth>900?'row-reverse':''}
            rightPosition={-20}
        />

        <CTA />
    </div>
  )
}

export default MusicDistribution