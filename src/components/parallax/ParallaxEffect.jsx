import React from 'react'
import './Parallax.css'
import { Parallax, Background } from 'react-parallax'
import Mic from '../../assets/images/mic.webp'

import Card from '../card/Card'
import {myCardDetails} from '../card/card-data'


const ParallaxEffect = () => {
  
  return (
    <div className="parallax__container">
      <Parallax
            blur={{ min:-15, max:15}}
            bgImage={Mic}
            bgImageAlt={Mic}
            strength={600}
          >
        <div className='parallax__item'>
              <h2>get to know a bit about our services</h2>
                <div className="parallax__card">
                  <Card 
                    cardTitle={myCardDetails.title_1}
                    cardBtnTitle={myCardDetails.btn_1}
                    cardDetail={myCardDetails.detail_1}
                    cardLogo={myCardDetails.img_1}
                  />
                  <Card 
                    cardTitle={myCardDetails.title_2}
                    cardBtnTitle={myCardDetails.btn_2}
                    cardDetail={myCardDetails.detail_2}
                    cardLogo={myCardDetails.img_2}
                  />
                  <Card 
                    cardTitle={myCardDetails.title_3}
                    cardBtnTitle={myCardDetails.btn_3}
                    cardDetail={myCardDetails.detail_3}
                    cardLogo={myCardDetails.img_3}
                  />
                  <Card 
                    cardTitle={myCardDetails.title_1}
                    cardBtnTitle={myCardDetails.btn_1}
                    cardDetail={myCardDetails.detail_1}
                    cardLogo={myCardDetails.img_1}
                  />
                  <Card 
                    cardTitle={myCardDetails.title_2}
                    cardBtnTitle={myCardDetails.btn_2}
                    cardDetail={myCardDetails.detail_2}
                    cardLogo={myCardDetails.img_2}
                  />
                  <Card 
                    cardTitle={myCardDetails.title_3}
                    cardBtnTitle={myCardDetails.btn_3}
                    cardDetail={myCardDetails.detail_3}
                    cardLogo={myCardDetails.img_3}
                  />
                </div>
        </div>
      </Parallax>
    </div>
  )
}

export default ParallaxEffect