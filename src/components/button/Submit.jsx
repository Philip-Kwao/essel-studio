import React from 'react'
import './Button.css'

const Submit = ({title}) => {
  return (
    <button className='default__btn' type="submit">{title}</button>
  )
}

export default Submit