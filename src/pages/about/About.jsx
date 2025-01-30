import React from 'react';
import '../about/About.css'
import Skills from '../../components/skills/Skills';
import IMG from '../../assets/char.jpeg'
import WorkWithMe from '../../components/workWithMe/WorkWithMe';

const About = () => {
  return (
    <div className='abt-wrapper'>
        <div className="img-profile">
            <div className="img left-img">
               {/* <img src={IMG} alt=""  />  */}
            </div>
            <div className="img main-img">
            {/* <img src={IMG} alt=""  />  */}
            </div>
            <div className="img right-img">
            {/* <img src={IMG} alt=""  />  */}
            </div>
        </div>

        <div className="intro">
            <p className='intro-heading'>Hello, I'm <span className='abt-h'>Charles Mambo</span></p>
            <p>I am a self-taught frontend developer passionate about crafting innovative, user-centered digital experiences that seamlessly blend creativity with technical precision. My goal is to design and build websites and applications that are not only functional but also visually captivating and intuitive to use.</p>
            <p>
            While frontend development is my core focus, I have a foundational understanding of backend technologies, including Node.js, Express.js, APIs, and MongoDB, enabling me to collaborate effectively in full-stack environments.

            In addition to coding, I’m actively pursuing knowledge in cybersecurity to enhance my technical expertise and ensure the security of the solutions I create. I’ve completed several courses in this field and am continuously growing my skill set to stay ahead in an ever-evolving digital landscape. 
           </p>
        </div>

        <Skills/>
        <WorkWithMe/>
      
        
    </div>
  )
}

export default About