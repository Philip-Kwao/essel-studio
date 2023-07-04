import React from 'react'
import Image1 from '../../assets/images/es-1.jpg'



const Slide = ({slideStyle, slideTitle, slideDetail}) => {
  return (
    <div className="slide__container" style={slideStyle}>
        <div className='slide__container_item'>
            <div className="slide__text">
                <h1>{slideTitle}</h1>
                <p className='paragraph'>
                    {slideDetail}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Slide