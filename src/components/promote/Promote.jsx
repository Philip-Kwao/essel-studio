import React from 'react'
import './Promote.css'
import AllScreens from '../../assets/images/all-screens.png'
import { FaBullhorn, FaComments } from 'react-icons/fa'
import { BsFillPeopleFill } from "react-icons/bs";
import Button from '../button/Button';

const Promote = () => {
  return (
    <div className='promote__container'>
      <div className="promote__left">
        <img className='promote__img' src={AllScreens} alt="" />
      </div>
      <div className="promote__right">
        <div className="promote__text">
          <h3>promote yourself</h3>
          <div className="promote__icons">
            <FaBullhorn />
            <FaComments />
            <BsFillPeopleFill />
          </div>
          <div className="promote__details">
            <p>Your artist portfolio website enables you to showcase your music, list upcoming gigs, and let fans purchase tickets. Additionally, you can use shoutouts to promote anything you desire, such as your online store, new songs, videos, merchandise, and exciting news.</p>
          </div>
          <Button title={'contact us'} />
        </div>
      </div>
    </div>
  )
}

export default Promote