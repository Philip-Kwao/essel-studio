import React, { useRef, useState } from 'react'

import emailjs from '@emailjs/browser';
import Submit from '../../components/button/Submit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'
import Image from '../../assets/images/es-5.jpg'
import ContactDetail from '../../components/contact/ContactDetail';
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
    
    const sendEmail = (e) => {
        const publicKey = import.meta.env.VITE_PUBLIC_KEY
        const templateID = import.meta.env.VITE_CONTACT_TEMPLATE_ID
        const serviceID = import.meta.env.VITE_SERVICE_ID
        e.preventDefault(); 
        
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
            console.log(result.status);
            //Toastify code that pops success when successful else keeps loading
          result.status === 200 ?  toast.success('Email Sent Successfully!', {
                isLoading:false,
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                }) : toast.loading("Loading")
        }, (error) => {
            console.log(error.text);
            toast.error('Whoops, Something went wrong!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        });
  };
  return (
    <div className="contact" >
        <div className="contact__container">
            <form ref={form} onSubmit={sendEmail}>
                <div className="contact__items">
                    <div className="contact__item">
                        <div className="label">Full Name</div>
                        <input type="text" name='full_name' placeholder='Full Name' onChange={(e)=>setFullName(e.target.value)} required />
                    </div>
                    <div className="contact__item">
                        <div className="label">Phone</div>
                        <input type="number" placeholder='Phone Number' name='phone_number' onChange={(e)=>setPhoneNumber(e.target.value)} required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                    <div className="contact__item">
                        <div className="label">Email</div>
                        <input type="email" placeholder='E-mail' name='email' onChange={(e)=>setEmail(e.target.value)} required />
                        <div className="contact__item">
                        <div className="label">Comment</div>
                        <textarea name="message" placeholder="Message" cols={innerWidth>900 ? '90':'38'} rows="10"></textarea>
                    </div>
                    </div>
                </div>
                <div className="submit__btn">
                    <Submit title={'Book Now'} />
                </div>
                <ToastContainer />
            </form>
        </div>
      <div className="contact__about" >
        <h1>contact details</h1>
        <div className="contact__about_details">
            <div>
                <ContactDetail 
                    contactIcon={<FaPhone className="d__about" /> }
                    contactLink='tel:+233245782993'
                    contactName='+233245782993 '
                />
            </div>
            <div>
                <ContactDetail 
                    contactIcon={<FaMailBulk className="d__about" />}
                    contactLink='mailto:esselstudioinc@gmail.com'
                    contactName='Essel Studio'
                />
            </div>
            <div>
                <ContactDetail 
                    contactIcon={<FaWhatsapp className="d__about" />}
                    contactLink='whatsapp://send?text=Hello!%20I%20Essel%20studio.%20'
                    contactName='Send Hi Message'
                />
            </div>
            
            
        </div>
        <div className="about__contact">
            <h3>about essel studio</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, nam ullam atque sed dignissimos amet pariatur libero eius fugiat nulla! Labore culpa unde magnam amet qui, aliquid itaque a accusamus.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact