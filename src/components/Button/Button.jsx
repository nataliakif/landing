// Button.js
import React from 'react';
import './Button.css'; // Импортируем стили

const Button = ({ isYellow, title }) => {
  const buttonClass = isYellow ? 'yellowButton' : 'transparentButton';

  return <button className={`button ${buttonClass}`}>{title}</button>;
};

export default Button;
