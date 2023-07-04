import React from 'react'
import './WhoWeAre.css'
import Item from './Item'
import { FaBinoculars, FaBullseye, FaHeart } from 'react-icons/fa'

const WhoWeAre = () => {
  return (
    <div className="whoweare">
      <h2>who we are</h2>
      <div className='whoweare__container'>
          <Item title={'our mission'} icon={<FaBullseye/>} detail={'To make your recording experience and music needs an easy one by using all resources available to fine tune the abilities of the local artists and musicians.'} />
          <Item title={'our vision'} icon={<FaBinoculars/>} detail={'To make your recording experience and music needs an easy one by using all resources available to fine tune the abilities of the local artists and musicians.'} />
          <Item title={'our values'} icon={<FaHeart/>} detail={'To make your recording experience and music needs an easy one by using all resources available to fine tune the abilities of the local artists and musicians.'} />
      </div>
    </div>
  )
}

export default WhoWeAre