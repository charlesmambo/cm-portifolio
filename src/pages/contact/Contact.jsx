import React from 'react';
import '../contact/Contact.css'
import Btn from '../../components/primaryBtn/Btn';
import { GiWorld } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import SEND from '../../assets/send.png'



const Contact = () => {
  return (
    <div className='contact-me'>
       <h2>Let’s Create Something Amazing Together!</h2>
       <div className="ctc-info">
        <div className="cc-wrapper">
        <div className="ctc-details">
           <h3>info...</h3>
           <div className="ctc-text">
           <MdEmail className='ctc-text-icon'/>
           <span>chylah11st@gmail.com</span>
           </div>
           <div className="ctc-text">
              <HiPhone className='ctc-text-icon'/>
              <span>+2762 3286 152</span>
           </div>
           <div className="ctc-text">
              <IoLogoWhatsapp className='ctc-text-icon'/>
              <span>+2762 3286 152</span>
           </div>
           <div className="ctc-text">
              <FaRegAddressCard  className='ctc-text-icon'/>
              <span>29 Bancroft rugby road</span>
           </div>
           <div className="ctc-text">
              <IoMdClock  className='ctc-text-icon'/>
              <span>09:00AM - 16:00</span>
           </div>
        </div>
        <img src={SEND} alt="" className='ctc-style-img'/>
        </div>
       
       <form>
        <div className="form-control">
          <label htmlFor="">Name:</label>
          <input type="text" name="name" className='name' />
        </div>
        <div className="form-control">
          <label htmlFor="">Email:</label>
          <input type="email" name="email" placeholder='Your Email'/>
        </div>
        <div className="form-control">
          <label htmlFor="">Phone:</label>
          <input type="tel" name="phone" placeholder='Phone'/>
        </div>
        <div className="form-control">
          <label htmlFor="">Message:</label>
          <textarea name="msg" placeholder='Your Message'></textarea>
        </div>
        <div className="form-control">
        <Btn label="Send Message"  className='order-btn'/> 
        </div>
       </form>
       </div>
   </div>
  )
}

export default Contact