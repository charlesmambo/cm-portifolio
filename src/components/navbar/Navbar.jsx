import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import Btn from '../primaryBtn/Btn';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu on link click
  };

  return (
    <div className="navbar-container container primary-alignments">
      <Link to="/" className="logo" onClick={() => handleLinkClick('home')}>
        cm<span className="highlight">Web</span>tech
      </Link>
      <ul className="secondary-alignments nav-item-container">
        <li className="nav-item">
          <Link
            to="/"
            className={activeLink === 'home' ? 'active' : ''}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleLinkClick('about')}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item contact">
          <Link
            to="/contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleLinkClick('contact')}
          >
            <Btn label="Let’s Chat" Icon={SiMinutemailer} />
          </Link>
        </li>
      </ul>
      <div className="open-close">
        {!isOpen ? (
          <RxHamburgerMenu className="ham-icon op-icon" onClick={toggleMenu} />
        ) : (
          <RiCloseLargeFill className="close-icon op-icon" onClick={toggleMenu} />
        )}
      </div>
      {isOpen && (
        <ul className="secondary-alignments mobile-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleLinkClick('about')}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item contact">
            <Link
              to="/contact"
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleLinkClick('contact')}
            >
              <Btn label="Let’s Chat" Icon={SiMinutemailer} />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
