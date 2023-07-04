import React from 'react'
import './Testimonials.css'
import { myTestimonials } from './testimonials-data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className='testimonials__container'>
        <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode= {{
            enabled: true,
            sticky: true,
          }}
        modules={[Pagination, Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="testimonial__slide">
                <span className="quote">
                <FaQuoteLeft />
                </span>
                <p>{myTestimonials.emily.detail}</p>
                <span>
                   - {myTestimonials.emily.name}
                </span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testimonial__slide">
                <span className="quote">
                <FaQuoteLeft />
                </span>
                <p>{myTestimonials.sarah.detail}</p>
                <span>
                   - {myTestimonials.sarah.name}
                </span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testimonial__slide">
                <span className="quote">
                <FaQuoteLeft />
                </span>
                <p>{myTestimonials.james.detail}</p>
                <span>
                   - {myTestimonials.james.name}
                </span>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials