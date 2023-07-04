import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay, Navigation, Pagination } from 'swiper'
import './Slider.css'
import Image1 from '../../assets/images/es-1.jpg'
import Image2 from '../../assets/images/es-2.jpg'
import Image3 from '../../assets/images/es-3.jpg'
import Image4 from '../../assets/images/es-4.jpg'
import Image5 from '../../assets/images/es-5.jpg'
import Image6 from '../../assets/images/es-6.jpg'
import Image7 from '../../assets/images/es-7.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from './Slide';

const Slider = () => {
  return (
    <div className='slider__container'>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets:true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slide__item'>
            <Slide
                slideDetail={'record your audio and music videos with usrecord your audio and music videos with usrecord your audio and music videos with us'}
                slideTitle={'record your audio and music videos with us'}
                slideStyle={{backgroundImage: `url(${Image5})`}}
            />
        </SwiperSlide>
        <SwiperSlide className='slide__item'>
            <Slide
                slideDetail={'record your audio and music videos with usrecord your audio and music videos with usrecord your audio and music videos with us'}
                slideTitle={'record your audio and music videos with us'}
                slideStyle={{backgroundImage: `url(${Image2})`}}
            />
        </SwiperSlide>
        <SwiperSlide className='slide__item'>
            <Slide
                slideDetail={'record your audio and music videos with usrecord your audio and music videos with usrecord your audio and music videos with us'}
                slideTitle={'record your audio and music videos with us'}
                slideStyle={{backgroundImage: `url(${Image4})`}}
            />
        </SwiperSlide>
        <SwiperSlide className='slide__item'>
            <Slide
                slideDetail={'record your audio and music videos with usrecord your audio and music videos with usrecord your audio and music videos with us'}
                slideTitle={'record your audio and music videos with us'}
                slideStyle={{backgroundImage: `url(${Image3})`}}
            />
        </SwiperSlide>
        <SwiperSlide className='slide__item'>
            <Slide
                slideDetail={'record your audio and music videos with usrecord your audio and music videos with usrecord your audio and music videos with us'}
                slideTitle={'record your audio and music videos with us'}
                slideStyle={{backgroundImage: `url(${Image5})`}}
            />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider