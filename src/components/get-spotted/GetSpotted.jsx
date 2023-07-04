import React from 'react'
import './GetSpotted.css'
import MusicGuy from '../../assets/images/musicguy.png'
import MusicLady from '../../assets/images/musiclady.png'
import Button from '../button/Button'

const GetSpotted = () => {
  return (
    <div className='get__spotted_container'>
        <div className="get__spotted_left">
            <img src={MusicGuy} alt="" className="spot__img1" />
            <img src={MusicLady} alt="" className="spot__img2" />
        </div>
        <div className="get__spotted_right">
            <h3>get recognized by gospel music lovers</h3>
            <p>Through your personalized website, you can effortlessly showcase your music, share upcoming gigs and events, and even sell tickets directly to your fans. Our intuitive platform allows you to promote your online store, featuring new songs, captivating videos, and the latest additions to your merchandise collection.</p>
            <div className="spotted__btn">
                <Button title={'contact us'} />
            </div>
        </div>
    </div>
  )
}

export default GetSpotted