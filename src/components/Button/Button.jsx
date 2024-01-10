// Button.js
import React from 'react';
import './Button.css';
const Button = ({ isYellow, title }) => {
  const buttonClass = isYellow ? 'yellowButton' : 'transparentButton';

  const handleClick = () => {
    if (window.trackButtonFb) {
      window.trackButtonFb();
    }
  };

  return (
    <button className={`button ${buttonClass}`} onClick={handleClick}>
      {title}
    </button>
  );
};
export default Button;
