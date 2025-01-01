import React from 'react';
import '../footer/Footer.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";


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
                    <a href=""><IoLogoWhatsapp className='ft-icon'/>
                    </a>
                </li>
                <li className="ft-items">
                    <a href=""><FaLinkedin className='ft-icon'/>
                    </a>
                </li>
                <li className="ft-items">
                    <a href="">
                        <FaInstagramSquare className='ft-icon'/>
                    </a>
                </li>
                <li className="ft-items">
                    <a href=""><SiFrontendmentor className='ft-icon'/>
                    </a>
                </li>
            </ul>

        </footer>
    </div>
  )
}

export default Footer