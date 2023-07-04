import React from 'react'
import './CTA.css'
import Button from '../button/Button'
import EsLogo from '../logo/EsLogo'
import Social from '../social/Social'
// import Img from '../../assets/images/img2.jpg'
import Img1 from '../../assets/images/img1.jpg'


const CTA = () => {
  return (
    <div className='cta'>
        <div className="cta__container_box">
          <div className="cta__container_box_item">
              <span className='line'></span>
            <div className="cta__social">
              <Social />
            </div>
            <span className='cta__title'>don't hesitate to call us</span>
            <p className='cta__detail'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, eum quam ipsa tempore asperiores est dolor adipisci corporis, quis dicta aliquid maxime? Ad atque repellendus dignissimos cum a, nostrum repudiandae?
            </p>
            <div  className="cta__btn">
              <Button title={'Get in touch'} />
            </div>
          </div>
        </div>
        <div className='cta__container' style={{background: `url(${Img1})`}}>
        </div>
    </div>
  )
}

export default CTA