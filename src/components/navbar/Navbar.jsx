import React, { useState } from 'react';
import '../navbar/Navbar.css';
import Btn from '../primaryBtn/Btn';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";

const Navbar = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // State to track active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle active link when clicked
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setView(link);
  };

  return (
    <div className='navbar-container container primary-alignments'>
      <a href="" className="logo">cm<span className='highlight'>Web</span>tech</a>
      <ul className='secondary-alignments nav-item-container'>
        <li className="nav-item">
          <a 
            href="#" 
            className={activeLink === 'home' ? 'active' : ''} // Apply active class if this is the active link
            onClick={() => handleLinkClick('home')}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a 
            href="#" 
            className={activeLink === 'projects' ? 'active' : ''} // Apply active class if this is the active link
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#">About Me</a>
        </li>
        <li className="nav-item contact">
          <Btn label="Let’s Chat" Icon={SiMinutemailer} onClick={() => alert('Chat button clicked!')} />
        </li>
      </ul>
      <div className="open-close">
        {!isOpen ? (
          <RxHamburgerMenu className='ham-icon op-icon' onClick={toggleMenu} />
        ) : (
          <RiCloseLargeFill className='close-icon op-icon' onClick={toggleMenu} />
        )}
      </div>
      {isOpen && (
        <ul className='secondary-alignments mobile-nav'>
          <li className="nav-item">
            <a 
              href="#" 
              className={activeLink === 'home' ? 'active' : ''} 
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#" 
              className={activeLink === 'projects' ? 'active' : ''} 
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#">About Me</a>
          </li>
          <li className="nav-item contact">
            <Btn label="Let’s Chat" Icon={SiMinutemailer} onClick={() => alert('Chat button clicked!')} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
