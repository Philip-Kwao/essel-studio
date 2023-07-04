import React from 'react'
import './Footer.css'
import Social from '../social/Social'
import FooterLink from './FooterLink'
import EsLogo from '../logo/EsLogo'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer__items">
        <EsLogo />
        <div className='footer__socials'>
          <Social />
        </div>
        <div className='footer__links'>
          <FooterLink 
            footLink={'about'} 
            linkTitle={'about'} 
          />
          <FooterLink 
            footLink={'terms-and-conditions'} 
            linkTitle={'terms'} 
          />
          <FooterLink 
            footLink={'contact'} 
            linkTitle={'contact'} 
          />
          <FooterLink 
            footLink={'gallery'} 
            linkTitle={'gallery'} 
          />
        </div>
        <div className='copyright'>
          &copy;<span>essel studio 2023</span>
        </div>
      </div>
    </div>
  )
}

export default Footer