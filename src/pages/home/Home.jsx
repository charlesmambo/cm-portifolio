import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group'; // Import the CSSTransition component
import Navbar from '../../components/navbar/Navbar';
import Service from '../service/Service';
import '../home/Home.css';
import Footer from '../../components/footer/Footer';
import Project from '../projects/Project';

const Home = () => {
  const [view, setView] = useState('home'); // 'home' for Service, 'projects' for Project

  return (
    <div className='home'>
      <Navbar setView={setView} />

      <div className="main-box container">
        <div className="home-box">
          <CSSTransition
            in={view === 'home'} // Condition for the transition
            timeout={300} // Duration of the transition
            classNames="fade" // Custom class name for fade-in/fade-out
            unmountOnExit // Unmount the component when it's not in view
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
