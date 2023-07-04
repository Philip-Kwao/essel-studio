import React from 'react'
import './Services.css'
import ServicesCard from './cards/ServicesCard'
import ServicesHeader from './cards/ServicesHeader'
import ServicesFooter from './cards/ServicesFooter'
import img from '../../assets/images/img.jpg'
import img2 from '../../assets/images/studio4.jpg'
import img3 from '../../assets/images/studio8.webp'
import img4 from '../../assets/images/studio3.jpg'

const Services = () => {
  return (
    <div className='services__container'>
        <div className="services__container_item">
            <div className="services__item_right">
                <div className="services__item_head">
                    <ServicesHeader />
                </div>
                <div className="services__img_card">
                    <ServicesCard title={'voice recording'} image={img} />
                </div>
                <div className="services__img_card">
                    <ServicesCard title={'track mastering'} image={img2} />
                </div>
            </div>
            <div className="services__item_right">
                <div className="services__img_card">
                    <ServicesCard title={'sound mixing'} image={img3} />
                </div>
                <div className="services__img_card">
                    <ServicesCard title={'audio mixing'} image={img4} />
                </div>
                
                <div className="services__item_head">
                    <ServicesFooter />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services