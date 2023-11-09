import React from 'react';

const Button = ({ isYellow, title }) => {
  const buttonStyle = isYellow ? styles.yellowButton : styles.transparentButton;

  return <button style={{ ...styles.button, ...buttonStyle }}>{title}</button>;
};

const styles = {
  button: {
    width: '350px',
    height: '60px',
    borderRadius: '100px',
    padding: '12px 94px',
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: '27px',
    fontWeight: '500',
  },

  yellowButton: {
    backgroundColor: '#F3DA70',
    border: 'none',
    color: '#206B93',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    border: '1px solid #F3DA70',
    color: '#F3DA70',
    marginBottom: '24px',
  },
};

export default Button;
