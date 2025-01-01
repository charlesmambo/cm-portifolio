import React from 'react';
import '../projectCard/ProjectCard.css';
import Btn from '../primaryBtn/Btn';

const ProjectCard = ({ imgSrc, label, Icon, link }) => {
  return (
    <div className='p-card'>
      <img className='p-card-img' src={imgSrc} alt="Project" />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="btn-open">
          <Btn label={label} Icon={Icon} />
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
