import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'; // Import the CSSTransition component
import Navbar from '../../components/navbar/Navbar';
import Service from '../service/Service';
import '../home/Home.css';
import Footer from '../../components/footer/Footer';
import Project from '../projects/Project';
import About from '../about/About';
import Contact from '../contact/Contact';

const Home = () => {
  const [view, setView] = useState('home'); 
  return (
    <div className='home'>
      <Navbar setView={setView} />

      <div className="main-box container">
        <div className="home-box">
          <CSSTransition
            in={view === 'home'} 
            timeout={300} 
            classNames="fade" 
            unmountOnExit 
          >
            <Service />
          </CSSTransition>

          <CSSTransition
            in={view === 'projects'}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Project />
          </CSSTransition>

          <CSSTransition
            in={view === 'about'}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <About/>
          </CSSTransition>

          <CSSTransition
            in={view === 'contact'}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Contact/>
          </CSSTransition>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
