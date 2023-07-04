import React from 'react'
import './PromoService.css'
import PromoImg from '../../assets/images/es-7.png'

const PromoService = () => {
  return (
    <div className='promo__service_container'>
        <div className="promo__service_left">
            <h3>promote your gospel music strategically with us</h3>
            <p>Our approach is tailored to your unique goals and aspirations, ensuring that we develop a personalized strategy to effectively promote your music. We combine the power of digital marketing, social media promotion, press outreach, and strategic partnerships to maximize your reach and connect you with the right audience.</p>
            <p>At our core, we are passionate about music and believe in the transformative power it holds. We are dedicated to supporting artists who are driven by their craft and are ready to take their music to the next level. Join us on this exciting journey and let us help you unlock new opportunities and propel your music career forward.</p>
        </div>
        <div className="promo__service_right">
            <img src={PromoImg} alt="" className="promo__service_img" />
        </div>
    </div>
  )
}

export default PromoService