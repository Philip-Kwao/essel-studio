import React from 'react'
import './Tiktok.css'
import MusicGuy from '../../assets/images/musicguy.png'
import Logo from '../../assets/images/tiktok-logo.png'
import Icon from '../../assets/images/tiktok-icon.png'
import Circular from '../../assets/images/tiktok-circular.png'
import Button from '../button/Button'

const Tiktok = () => {
  return (
    <div className='tiktok__container'>
        <div className="tiktok__left">
            <div className="tiktok__images">
                <img src={MusicGuy} alt="" className="tiktok__img1"  />
                <img src={Circular} alt="" className="tiktok__img2"  />
                <img src={Icon} alt="" className="tiktok__img3"  />
                <img src={Logo} alt="" className="tiktok__img4"  />
            </div>
        </div>
        <div className="tiktok__right">
            <h3>TikTok Influencer Marketing</h3>
            <p>Our TikTok influencer marketing services are designed to connect your brand with popular TikTok creators who have a loyal following and a deep understanding of the platform's trends and culture. By partnering with these influential creators, you can tap into their dedicated audience and organically promote your brand and music</p>
            <p>Our team will collaborate with you to understand your goals, develop a tailored influencer marketing strategy, and execute compelling campaigns that drive results. We will guide you through the process, from identifying the right influencers to crafting engaging content and tracking campaign performance.</p>
            <div className="tiktok__btn">
                <Button title={'get your music trending'} />
            </div>
        </div>
    </div>
  )
}

export default Tiktok