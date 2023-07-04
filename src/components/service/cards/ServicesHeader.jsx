import React from 'react'
import '../Services.css'

const ServicesHeader = () => {
  return (
    <div className='services__header'>
        <span className="services__header_title">
            <span className='services__header_line'></span>
            <span className="services__header_item">
                our services
            </span>
        </span>
        <div className="services__header_subtitle">
            <h3>service we offer</h3>
        </div>
    </div>
  )
}

export default ServicesHeader