import React from 'react'
import './AboutCard.css'
import { FaCheck } from 'react-icons/fa'

const AboutOffer = ({checkDetail}) => {
  return (
    <div className='about__offer'>
        <FaCheck className='about__offer_icon' />
        {/* <p>{checkDetail}</p> */}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default AboutOffer