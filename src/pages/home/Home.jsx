import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Service from '../service/Service';
import Project from '../projects/Project';
import About from '../about/About';
import Contact from '../contact/Contact';
import '../home/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Router>
        <Navbar />

        <div className="main-box container">
          <div className="home-box">
          <Routes>
            <Route path="/" element={<Service />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
        </div>

        <Footer />
      </Router>
    </div>
  );
};

export default Home;
