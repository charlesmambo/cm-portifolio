import React from 'react';
import '../card/Card.css';
import Btn from '../primaryBtn/Btn';
import { SiMinutemailer } from "react-icons/si";

const Card = ({ imageSrc, title, description, price, buttonLabel, onButtonClick }) => {
  return (
    <div className='card'>
      <img className='card-img' src={imageSrc} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price">
          Price
          <span className="bold">R {price}</span>
        </div>
        <Btn
          className='order-btn'
          label={buttonLabel}
          Icon={SiMinutemailer}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
}

export default Card;
