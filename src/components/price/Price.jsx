import React from 'react'
import './Price.css'
import PriceItem from './PriceItem'
import Button from '../button/Button'

const Price = ({amount, priceHeight, priceWidt, priceMarginTop,priceButton}) => {
  return (
    <div className="price__card" style={{height:`${priceHeight}px`, width:`${priceWidt}px`}}>
        <div className="price__title">
            <h4>audio recording</h4>
            <span className="price__amount">Gh&#8373; {amount}</span>
        </div>
        <div className="price__item" style={{marginTop:`${priceMarginTop}rem`}}>
            <PriceItem item={'2hrs recording session'} />
            <PriceItem item={'2hrs recording session'} />
            <PriceItem item={'2hrs recording session'} />
            <PriceItem item={'2hrs recording session'} />
            <PriceItem item={'2hrs recording session'} />
            <PriceItem item={'2hrs recording session'} />
            <PriceItem item={'2hrs recording session'} />
            <PriceItem item={'2hrs recording session'} />
        </div>
        <div className="price__button">
            <Button title={priceButton} />
        </div>
    </div>
  )
}

export default Price