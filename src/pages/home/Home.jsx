import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Service from '../service/Service';
import '../home/Home.css'
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>

        <div className="main-box container">
            <div className="home-box">
            <Service/>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Home