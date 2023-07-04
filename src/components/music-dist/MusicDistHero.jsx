import React from 'react'
import './MusicDistHero.css'
import Button from '../button/Button'
import Image from '../../assets/images/listening.png'

const MusicDistHero = () => {
  return (
    <div className='MD__hero_container'>
        <div className="MD__hero_left">
            <div className="MD__hero_text">
                <h1>get your gospel music distributed worldwide</h1>
                <div className="MD__hero_details">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto explicabo ducimus accusantium aliquid voluptates excepturi tempore corrupti sint optio nostrum dolorum debitis, illum cumque ullam, aperiam perspiciatis maxime aliquam quis.</p>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
                </div>
                <div className="MD__hero_btn">
                    <Button title={'record your first music'} />
                </div>
            </div>
        </div>
        <div className="MD__hero_right" style={{background:`url(${Image})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        </div>
    </div>
  )
}

export default MusicDistHero