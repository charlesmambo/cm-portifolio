import React from 'react';
import '../contact/Contact.css'
import Btn from '../../components/primaryBtn/Btn';

const Contact = () => {
  return (
    <div className='contact-me'>
       <h2>Let’s Create Something Amazing Together!</h2>
       <div className="ctc-info">
        <div className="style"></div>
       
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
        <Btn label="Let’s Chat"/> 
        </div>
       </form>
       </div>
   </div>
  )
}

export default Contact