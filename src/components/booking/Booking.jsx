import React, { useRef, useState } from 'react'
import './Booking.css'
import emailjs from '@emailjs/browser';
import Submit from '../button/Submit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {

    

    const form = useRef();
    
    const sendEmail = (e) => {
        const publicKey = import.meta.env.VITE_PUBLIC_KEY
        const templateID = import.meta.env.VITE_TEMPLATE_ID
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
    <form className='
    booking__container' ref={form} onSubmit={sendEmail}>
        <div className="booking__items">
            <div className="booking__item">
                <div className="label">First Name</div>
                <input type="text" name='first_name' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} required />
            </div>
            <div className="booking__item">
                <div className="label">Last Name</div>
                <input type="text" placeholder='Last Name' name='last_name' onChange={(e)=>setLastName(e.target.value)} required />
            </div>
            <div className="booking__item">
                <div className="label">Phone</div>
                <input type="tel" placeholder='Phone Number' name='phone_number' onChange={(e)=>setPhoneNumber(e.target.value)} required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            </div>
            <div className="booking__item">
                <div className="label">Email</div>
                <input type="email" placeholder='E-mail' name='email' onChange={(e)=>setEmail(e.target.value)} required />
            </div>
        </div>
        <div className="booking__items">
            <div className="booking__item">
                <div className="label">Date Of Session</div>
                <input type="date" placeholder='Date Of Session' name='date_of_session' onChange={(e)=>setDate(e.target.value)} required />
            </div>
            <div className="booking__item">
                <div className="label">How many people</div>
                <input type="number" placeholder='How many people' name='how_many_people' onChange={(e)=>setPeople(e.target.value)} required />
            </div>
            <div className="booking__item">
                <div className="label">How many hours</div>
                <input type="number" placeholder='How Many Hours To Be Spent' name='hours_spent' onChange={(e)=>setHours(e.target.value)} required />
            </div>
                <Submit title={'Book Now'} />
        </div>
        <ToastContainer />
    </form>
  )
}

export default Booking