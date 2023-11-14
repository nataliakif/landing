import React from 'react';
import './Reviews.css';
import { ReactComponent as TitleLine } from '../../images/svg/mobile/title-line.svg';
import { ReactComponent as BigWaves } from '../../images/svg/mobile/big-waves.svg';
import TestimonialsSlider from '../Slider/Slider';

export const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="wrapper">
          <h2 className="reviews_title">відгуки про урок</h2>
          <TitleLine className="title_line"></TitleLine>
        </div>
        <TestimonialsSlider></TestimonialsSlider>
        <BigWaves></BigWaves>
      </div>
    </div>
  );
};
