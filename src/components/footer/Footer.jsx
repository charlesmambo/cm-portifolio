import React from 'react';
import '../footer/Footer.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <footer>
            
            <div className="footer-logo">
                <p>Your potential is far greater <br /> than any obstacle you face.</p>
            </div>
            <p>©{new Date().getFullYear()}                 <a href="" className="logo footer-lg">cm<span className='highlight'>Web</span>tech</a></p>

            <ul className="footer-items">
                <li className="ft-items">
                    <a href="https://web.whatsapp.com/" target="_blank"><IoLogoWhatsapp className='ft-icon'/>
                    </a>
                </li>
                <li className="ft-items">
                    <a href="https://www.linkedin.com/in/charlesmambo/" target="_blank"><FaLinkedin className='ft-icon'/>
                    </a>
                </li>
                <li className="ft-items">
                    <a href="https://www.instagram.com/charles.the.awe.developer/" target="_blank">
                        <FaInstagramSquare className='ft-icon'/>
                    </a>
                </li>
                <li className="ft-items">
                    <a href="https://www.frontendmentor.io/profile/charlesmambo" target="_blank"><SiFrontendmentor className='ft-icon'/>
                    </a>
                </li>
                <li className="ft-items">
                    <a href="https://github.com/charlesmambo" target="_blank"><FaGithub className='ft-icon'/>
                    </a>
                </li>
            </ul>

        </footer>
    </div>
  )
}

export default Footer