import React from 'react';
import './ImageBlock.css';
// import footerImage from '../../images/photos/footer.png';
import { ReactComponent as HalfRing } from '../../images/svg/mobile/half-ring.svg';
import Button from '../Button';

export const ImageBlock = () => {
  return (
    <div className="image_block">
      {/* <img src={footerImage} alt="Робота на Upwork"></img> */}
      <div className="container">
        <div className="image_wrapper">
          <p className="image_text">
            <span>урок від Насті</span> - це ваш шанс змінити своє життя.{' '}
          </p>
          <p className="image_text">
            <span>Приєднуйтесь</span> і почніть працювати на себе вже сьогодні!
          </p>
          <HalfRing className="image_svg"></HalfRing>
        </div>

        <Button isYellow={true} title="Купити урок" />
      </div>
    </div>
  );
};
