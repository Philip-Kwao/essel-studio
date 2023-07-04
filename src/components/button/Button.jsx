import React from 'react'
import './Button.css'

const Button = ({title}) => {
  return (
    <button className='default__btn'>{title}</button>
  )
}

export default Button