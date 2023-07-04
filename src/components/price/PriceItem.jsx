import React from 'react'

const PriceItem = ({item}) => {
  return (
    <div className='priceItem__container'>
        <div>
            <span className='priceItem__line'></span>
        </div>
        <span>{item}</span>
    </div>
  )
}

export default PriceItem