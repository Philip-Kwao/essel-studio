import React from 'react'
import './social.css'
import { FaFacebookF, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";
const Social = () => {
  return (
    <div className='social__container'>

      <a className='social__link' href="https://facebook.com" target='_blank'>
        <FaFacebookF className='social__icon' />
      </a>
      <a className='social__link' href="https://instagram.com" target='_blank'>
        <FaInstagram className='social__icon' />
      </a>
      <a className='social__link' href="https://spotify.com" target='_blank'>
        <FaSpotify className='social__icon' />
      </a>
      <a className='social__link' href="https://twitter.com" target='_blank'>
        <FaTwitter className='social__icon' />
      </a>
      <a className='social__link' href="https://youtube.com" target='_blank'>
        <FaYoutube className='social__icon' />
      </a>
    </div>
  )
}

export default Social