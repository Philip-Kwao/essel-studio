import React from 'react'
import './ContactDetail.css'
import { FaPhone } from "react-icons/fa";

const ContactDetail = ({contactIcon, contactLink, contactName}) => {
  return (
    <div className='contact__detail_item'>
        {contactIcon}
        <div className="contact__d_item">
           <a target='_blank' href={contactLink}>
            {contactName}
           </a> 
        </div>
    </div>
  )
}

export default ContactDetail