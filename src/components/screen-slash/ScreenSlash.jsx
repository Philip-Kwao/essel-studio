import React from 'react'
import './ScreenSlash.css'

const ScreenSlash = ({slash, top, bgColor}) => {
  return (
    <div className="screen__slash">
        <div className='screen__slash_container' style={{clipPath:`polygon(${slash})`,top:`${top}rem`, backgroundColor:`${bgColor}`}}></div>
    </div>
  )
}

export default ScreenSlash