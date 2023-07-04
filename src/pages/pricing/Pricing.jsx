import React from 'react'
import Price from '../../components/price/Price'
import './Pricing.css'
import PriceImage from './PriceImage'
import Img1 from '../../assets/images/studio6.webp'
import Img2 from '../../assets/images/studio2.jpg'
import Img3 from '../../assets/images/studio3.jpg'
import Img4 from '../../assets/images/studio4.jpg'
import Img5 from '../../assets/images/studio5.jpg'
import Img6 from '../../assets/images/img1.jpg'
import Testimonials from '../../components/testimonials/Testimonials'
import CTA from '../../components/cta/CTA'
const Pricing = () => {
  return (
    <div className='pricing__container'>
      <div className="pricing__head">
        <h1>our pricing</h1>
        <span>check out our prices</span>
      </div>
      <div className="pricing__items">
        <Price amount={500} priceButton='get audio pack' />
        <Price amount={200} priceHeight={700} priceWidth={500} priceMarginTop={5} priceButton='get standard pack' />
        <Price amount={1200} priceButton='get exclusive pack' />
      </div>
      <div className="price__image_container">
        <PriceImage bgImg={Img1} title={'audio mixing'} amount={300} />
        <PriceImage bgImg={Img2} title={'mastering'} amount={300} />
        <PriceImage bgImg={Img3} title={'rehearsal'} amount={'40 per 1 hour'} />
        <PriceImage bgImg={Img4} title={'music video shoot'} amount={1000} />
        <PriceImage bgImg={Img5} title={'music promotion'} amount={3000} />
        <PriceImage bgImg={Img6} title={'online music distribution'} amount={1500} />
      </div>
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Pricing