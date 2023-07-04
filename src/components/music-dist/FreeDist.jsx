import React from 'react'
import './FreeDist.css'
import BGImg from '../../assets/images/bg_img.png'

const FreeDist = ({direct, title, subtitle, description, bigImg, smallImg, leftPosition, rightPosition}) => {
  return (
    <div className='free__dist_container' style={{flexDirection:`${direct}`}}>
        <div className="free__dist_left_container">
            <div className="free__dist_left_text">
                <span>{subtitle}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="free__dist_left" style={{background:`url(${BGImg})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', opacity:0.3}}>
            </div>
        </div>
        <div className="free__dist_right">
            <div className="free__dist_right_img_container">
                <img className='free__img_sm' src={smallImg} alt="" width={300} style={{left:`${leftPosition}%`, right:`${rightPosition}%`}} />
                <img className='free__img_lg' src={bigImg} alt="" width={550} />
            </div>
        </div>
    </div>
  )
}

export default FreeDist