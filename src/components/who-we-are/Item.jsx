import React from 'react'
import './WhoWeAre.css'
import { FaBullseye } from "react-icons/fa";
const Item = ({icon, title, detail}) => {
  return (
    <div className='item__container'>
        <div className="item__icon">
            {icon}
        </div>
        <div className="item__detail">
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
    </div>
  )
}

export default Item