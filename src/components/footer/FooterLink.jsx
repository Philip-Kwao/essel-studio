import React from 'react'
import { Link } from 'react-router-dom'

const FooterLink = ({footLink, linkTitle}) => {
  return (
    <Link to={footLink} className='footer__link'>
        {linkTitle}
    </Link>
  )
}

export default FooterLink