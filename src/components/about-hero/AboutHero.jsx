import React from 'react'
import './AboutHero.css'
import BgImg from '../../assets/images/img3.jpg'
import Button from '../button/Button'
import { FaPlayCircle } from 'react-icons/fa'

const AboutHero = () => {
  return (
    <div className='about__hero_container'>
      <div className="about__text">
        <span className="subtitle">recording studio</span>
        <h1 className="about__title">we record gospel music and videos.</h1>
        <p className='about__para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci culpa, provident esse debitis excepturi dolorem cupiditate aliquid sit corporis, necessitatibus ab quia, quaerat error a at. Error, non necessitatibus?</p>
        <div className="about__hero_btn">
          <Button title={'get started'} />
        </div>
      </div>
      <div className="about__play_logo">
        <div className="about_play">
          <div className="about__play_icon">
            <FaPlayCircle />
          </div>
          <img src={BgImg} alt="background image" />
        </div>
      </div>
    </div>
  )
}

export default AboutHero