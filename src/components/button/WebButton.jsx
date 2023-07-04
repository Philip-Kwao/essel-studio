import React from 'react'

const WebButton = ({color1, color2, degree,textColor,title}) => {
  return (
    <button className='web__btn' style={{background:`linear-gradient(${degree}deg, ${color1}, ${color2})`, color:`${textColor}`}}>{title}</button>
  )
}

export default WebButton