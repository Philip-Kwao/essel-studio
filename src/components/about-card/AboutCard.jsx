import React from 'react'
import './AboutCard.css'
import Img from '../../assets/images/mic.webp'
import AboutOffer from './AboutOffer'

const AboutCard = () => {
  return (
    <div className='about__card_container'>
      <div className="about__card_item">
        <div className="about__card__img" style={{background: `url(${Img})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}></div>

        <div className="about__card__text">
          <div className="about__card_text_container">

          <h2>welcome to essel studio</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corporis illo sunt doloremque facilis ducimus praesentium, nostrum ad commodi alias maxime id aliquid excepturi quisquam delectus inventore, dicta provident. Atque?</p>
          <div className="sub__details">
            <h3>we are the best</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam tenetur sequi soluta fuga eveniet. Sed vero quod, assumenda laudantium accusamus ipsa quisquam, cumque voluptates officiis sapiente adipisci molestiae corrupti!</p>
          </div>
          <div className="check__details">
            <AboutOffer />
            <AboutOffer />
            <AboutOffer />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard