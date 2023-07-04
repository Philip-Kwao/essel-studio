import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ServicesCard = ({title, image}) => {
  return (
    <div className='services__card_container'>
        <div className="services__card_text">
            <span className='services__card_title'>{title}</span>
            <Link className='services__card_link' to={'service'}>
                <span className='services__card_link'>
                <span className='services__link_text'>
                    more details 
                    </span> 
                    <span className='services__link_icon'>
                        <BsArrowRight /> 
                    </span>
                </span>
            </Link>
        </div>
        <div className='services__card_img' style={{background:`url(${image})`, backgroundSize:'cover'}}></div>
    </div>
  )
}

export default ServicesCard