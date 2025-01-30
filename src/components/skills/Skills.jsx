import React from 'react';
import '../skills/skills.css';
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";


const Skills = () => {
  return (
    <div className='skills-wrapper'>

        <div className="skills-content-wrapper">
            <div className="skills-content">
            <h2>skills & Experience</h2>
                <p>Main area of my expertise is front end development (client side of the web).</p>

                <p><b className='bold-skill-text'>HTML, CSS, UI/UX, WORDPRESS, SQL, Git and GitHub, JS (Reactjs)</b>, building small and medium web apps with Reactjs, features, animations and coding interactive layouts.</p>

                <p>Visit my  
                    <a href="https://www.linkedin.com/in/charles-mambo-932aa221b/" target="_blank" className='open-link'>LinkedIn</a> profile for more details or just  
                    <Link to="/contact" className="open-link">contact</Link> me.
                </p>
            </div>

            <div className="skills-box">
                <h2>Html</h2>
                <h2>css</h2>
                <h2>ui/ux</h2>
                <h2>wordpress</h2>
                <h2>SQL</h2>
                <h2>Git and GitHub</h2>
                <h2>JS</h2>
                <h2>ReactJS</h2>
            </div>
        </div>
    </div>
  )
}

export default Skills