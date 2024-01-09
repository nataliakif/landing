// Button.js
import React from 'react';
import './Button.css';

const Button = ({ isYellow, title }) => {
  const buttonClass = isYellow ? 'yellowButton' : 'transparentButton';

  return <button className={`button ${buttonClass}`} onclick="trackButtonFb()">{title}</button>;
};

export default Button;
