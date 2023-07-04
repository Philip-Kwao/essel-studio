import React from 'react'
import './ConnectEverything.css'
import TreeSocial from '../../assets/images/social_tree.png'
import SocialImg from '../../assets/images/social.png'
import Button from '../button/Button'
import { FaMusic, FaSpotify, FaVideo } from "react-icons/fa";
const ConnectEverything = () => {
  return (
    <div className='connect__everything'>
        <div className="connect__left">
            {/* <img className='connect__img' src={TreeSocial} alt="social tree" width={400}  /> */}
            <img className='connect__social_img' src={SocialImg} alt="social image" />
        </div>
        <div className="connect__right">
            <h3>Integrate your social media platforms with your audio streaming services.</h3>
            <span className="streaming__icons">
                <FaSpotify className='fa__icons' />
                <FaMusic className='fa__icons' />
                <FaVideo className='fa__icons' />
            </span>
            <p>
            Effortlessly link all your accounts to your personalized artist website. Allow your website to handle updates seamlessly, freeing up your time to concentrate on creating music.</p>
            <div className="connect__btn">
                <Button title={'contact us'} />
            </div>
        </div>
    </div>
  )
}

export default ConnectEverything