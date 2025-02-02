import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../contact/Contact.css';
import Btn from '../../components/primaryBtn/Btn';
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import SEND from '../../assets/send.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ ...errors, email: 'Please enter a valid email address.' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Send the email using EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };
    

    emailjs.send('service_6pj5tlt', 'template_946unap', templateParams, 'mXQbLhq7JTLs0tFp7')
      .then((response) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("There was an error sending your message.");
      });
  };

  return (
    <div className='contact-me'>
      <h2>Let’s Create Something Amazing Together!</h2>
      <div className="ctc-info">
        <div className="cc-wrapper">
          <div className="ctc-details">
            <h3>info...</h3>
            <div className="ctc-text">
              <MdEmail className='ctc-text-icon' />
              <span>charles@cmwebtech.co.za</span>
            </div>
            <div className="ctc-text">
              <HiPhone className='ctc-text-icon' />
              <span>+2762 3286 152</span>
            </div>
            <div className="ctc-text">
              <IoLogoWhatsapp className='ctc-text-icon' />
              <span>+2762 3286 152</span>
            </div>
            <div className="ctc-text">
              <FaRegAddressCard className='ctc-text-icon' />
              <span>29 Bancroft rugby road</span>
            </div>
            <div className="ctc-text">
              <IoMdClock className='ctc-text-icon' />
              <span>09:00AM - 16:00</span>
            </div>
          </div>
          <img src={SEND} alt="" className='ctc-style-img' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              className={`${success ? 'success-border' : ''}`}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              className={`${success ? 'success-border' : ''}`}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone'
              className={`${success ? 'success-border' : ''}`}
            />
          </div>
          <div className="form-control">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Your Message'
              className={`${success ? 'success-border' : ''}`}
            ></textarea>
          </div>
          <div className="form-control">
            <Btn label="Send Message" className='order-btn' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
