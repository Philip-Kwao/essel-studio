import React from 'react'
import './Card.css'
import Button from '../button/Button'

const Card = ({cardLogo, cardDetail, cardTitle, cardBtnTitle}) => {
  return (
    <div className='card__container'>
        <img className="card__logo" src={cardLogo} />
        <div className="card__head">
            <h3>{cardTitle}</h3></div>
        <div className="card__detail">{cardDetail}</div>
        <Button title={cardBtnTitle} />
    </div>
  )
}

export default Card