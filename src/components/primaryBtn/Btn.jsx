import React from 'react';
import './Btn.css'; // Ensure you have appropriate styles here

const Btn = ({ label, Icon, onClick, className }) => {
  return (
    <div className={`primary-btn ${className}`}>
       <button className={`ctc-btn ${className}`} onClick={onClick}>
        {label}
        {Icon && <Icon />}
      </button>
    </div>
  );
};

export default Btn;
