import React, { useState } from 'react';
import '../navbar/Navbar.css';
import Btn from '../primaryBtn/Btn';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";

const Navbar = () => {
  // State to toggle between ham-icon and close-icon, and to show/hide mobile-nav
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the icons and mobile-nav visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-container container primary-alignments'>
      <a href="" className="logo">cm<span className='highlight'>Web</span>tech</a>
      <ul className='secondary-alignments nav-item-container'>
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a href="#">About Me</a>
        </li>
        <li className="nav-item contact">
          {/* Pass the label and icon to the Btn component */}
          <Btn label="Let’s Chat" Icon={SiMinutemailer} onClick={() => alert('Chat button clicked!')} />
        </li>
      </ul>
      <div className="open-close">
        {/* Display ham-icon if not open, else display close-icon */}
        {!isOpen ? (
          <RxHamburgerMenu className='ham-icon op-icon' onClick={toggleMenu} />
        ) : (
          <RiCloseLargeFill className='close-icon op-icon' onClick={toggleMenu} />
        )}
      </div>

      {/* Conditionally render mobile-nav based on isOpen state */}
      {isOpen && (
        <ul className='secondary-alignments mobile-nav'>
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Projects</a>
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
