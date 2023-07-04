import React from 'react'
import './Spotify.css'
import Player from '../../assets/images/player.png'
const Spotify = () => {
  return (
    <div className="spotify">
      <div className='spotify__container'>
          <div className="spotify__left">
              <h3>spotify promotion</h3>
              <p>Our Spotify streaming promotion services are designed to boost your visibility, increase your listener base, and ultimately enhance your chances of success in the digital music landscape. We understand the immense competition out there, and our goal is to help you rise above the noise and stand out from the crowd.</p>
              <p>Our team of professionals will utilize various techniques to promote your music on Spotify, including playlist pitching, organic listener growth, strategic advertising, and influencer partnerships. We will optimize your artist profile, curate engaging playlists, and utilize data-driven insights to maximize your streaming numbers and gain traction within the Spotify community.</p>
          </div>
          <div className="spotify__right">
              <img src={Player} alt="" />
          </div>

      </div>
    </div>
  )
}

export default Spotify