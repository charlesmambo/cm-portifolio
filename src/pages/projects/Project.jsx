import React from 'react';
import '../projects/Project.css'
import ProjectCard from '../../components/projectCard/ProjectCard';
import { FaRegEye } from "react-icons/fa6";
import IMG1  from '../../assets/image1.png';
import IMG2  from '../../assets/image2.png';
import IMG3  from '../../assets/image3.png';
import IMG4  from '../../assets/image4.png';
import IMG5  from '../../assets/image5.png';
import IMG6  from '../../assets/image7.png';
import IMG8  from '../../assets/image8.png';
import IMG9  from '../../assets/image9.png';

const Project = () => {
  return (
    <div className='projects-container'>
         <h1>
         Every Great Idea Deserves an Exceptional Web Experience. Explore My Collection of Projects Where Creativity Meets Functionality.  
         Whether You’re Dreaming Big or Starting Small, Let’s Work Together to Turn Your Vision into Reality!
        </h1>
        <h2>Explore My Work</h2>

        <div className="project-card">
            <ProjectCard 
                imgSrc={IMG1} 
                label="View" 
                Icon={FaRegEye} 
                link="https://fancytam.co.za/" 
            />
            <ProjectCard 
                imgSrc={IMG2} 
                label="View" 
                Icon={FaRegEye} 
                link="https://henry-demo-website.netlify.app/" 
            />
            <ProjectCard 
                imgSrc={IMG3} 
                label="View" 
                Icon={FaRegEye} 
                link="https://cm-loopstudio.netlify.app/" 
            />
            <ProjectCard 
                imgSrc={IMG4} 
                label="View" 
                Icon={FaRegEye} 
                link="https://bc-test-site.netlify.app/" 
            />
        </div>
        <div className="project-card">
            <ProjectCard 
                imgSrc={IMG5} 
                label="View" 
                Icon={FaRegEye} 
                link="https://react-bookmark-landing-page.netlify.app/" 
            />
            <ProjectCard 
                imgSrc={IMG6} 
                label="View" 
                Icon={FaRegEye} 
                link="https://clipboard-landing-page-cm.netlify.app/" 
            />
            <ProjectCard 
                imgSrc={IMG8} 
                label="View" 
                Icon={FaRegEye} 
                link="https://huddle-landing-page-cm.netlify.app/" 
            />
            <ProjectCard 
                imgSrc={IMG9} 
                label="View" 
                Icon={FaRegEye} 
                link="https://iridescent-bienenstitch-840a5f.netlify.app/" 
            />
        </div>
    </div>
  )
}

export default Project