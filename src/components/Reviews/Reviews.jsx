import React from 'react';
import './Reviews.css';
import useIsDesktop from '../IsDesktop';
import { ReactComponent as TitleLine } from '../../images/svg/mobile/title-line.svg';
import { ReactComponent as BigWaves } from '../../images/svg/mobile/big-waves.svg';
import TestimonialsSlider from '../Slider/Slider';

export const Reviews = () => {
  const isDesktop = useIsDesktop();
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews_wrapper">
          <h2 className="reviews_title">відгуки про урок</h2>
          <TitleLine className="title_line"></TitleLine>
        </div>
        <TestimonialsSlider></TestimonialsSlider>
        {!isDesktop && <BigWaves className="waves"></BigWaves>}
      </div>
    </div>
  );
};
