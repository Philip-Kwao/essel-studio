import React from 'react'
import './Service.css'
import Illus6 from '../../assets/images/illus/i-6.avif'
import Illus2 from '../../assets/images/illus/i-2.webp'
import Illus3 from '../../assets/images/illus/i-3.webp'
import Button from '../button/Button'

const Service = () => {
  return (
    <div className="service__container">
      <div className='service__items'>
        <div className="service__left">
        <h2 className='service__header'>state of the arts studio</h2>
            <p className="service__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt, repellendus excepturi ea animi ducimus, consequatur incidunt assumenda, vel necessitatibus distinctio voluptate. Consequuntur, omnis voluptates harum eligendi possimus nihil illo!
              Sequi quod sit nam, quaerat aspernatur blanditiis dolorem quibusdam ea enim architecto illo tempora repudiandae mollitia deserunt quidem corrupti voluptas possimus deleniti ut repellat. Iure fuga placeat repudiandae possimus eos.
            </p>
            <Button title={'book a session'} />
        </div>
        <div className="service__right">
          <img className='service__image' src={Illus2} alt="" />
        </div>
      </div>
      <div className='service__items'>
        <div className="service__left">
         
        <img className='service__image' src={Illus3} alt="" />
        </div>
        <div className="service__right">
            <h2 className='service__header'>state of the arts studio</h2>
            <p className="service__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt, repellendus excepturi ea animi ducimus, consequatur incidunt assumenda, vel necessitatibus distinctio voluptate. Consequuntur, omnis voluptates harum eligendi possimus nihil illo!
              Sequi quod sit nam, quaerat aspernatur blanditiis dolorem quibusdam ea enim architecto illo tempora repudiandae mollitia deserunt quidem corrupti voluptas possimus deleniti ut repellat. Iure fuga placeat repudiandae possimus eos.
            </p>
            <Button title={'book a session'} />
        </div>
      </div>
      <div className='service__items'>
        <div className="service__left">
        <h2 className='service__header'>state of the arts studio</h2>
            <p className="service__paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt, repellendus excepturi ea animi ducimus, consequatur incidunt assumenda, vel necessitatibus distinctio voluptate. Consequuntur, omnis voluptates harum eligendi possimus nihil illo!
              Sequi quod sit nam, quaerat aspernatur blanditiis dolorem quibusdam ea enim architecto illo tempora repudiandae mollitia deserunt quidem corrupti voluptas possimus deleniti ut repellat. Iure fuga placeat repudiandae possimus eos.
            </p>
            <Button title={'book a session'} />
        </div>
        <div className="service__right">
          <img className='service__image' src={Illus6} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Service