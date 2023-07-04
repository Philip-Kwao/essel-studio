import React from 'react'
import './PriceImage.css'

const PriceImage = ({bgImg, title, amount}) => {
  return (
    <div className="pricingImage">
        <div className="pricingImage__text">
            <span className="pricingImage__priceTag">Gh&#8373;{amount}</span>
            <span className="pricingImage__title">{title}</span>
        </div>
        <div className='PricingImage__container' style={{background:`url(${bgImg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        </div>
        
    </div>
  )
}

export default PriceImage