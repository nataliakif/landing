import React from 'react';
import './About.css';
import { ReactComponent as SubtitleLine } from '../../images/svg/subtitle-line.svg';
import { ReactComponent as BlueRing } from '../../images/svg/blueRing.svg';
import { ReactComponent as Bulb } from '../../images/svg/bulb.svg';
import { ReactComponent as XBlue } from '../../images/svg/x-blue.svg';
import imageSrc from '../../images/photos/about.png';
import Button from '../Button';

export const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="wrapper">
          <BlueRing className="blue_ring"></BlueRing>
          <p className="about_title">
            ЯК <span className="about_title_span">ЗНАЙТИ</span> РОБОТУ НА
            UPWORK?
          </p>
          <img className="about_image" src={imageSrc} alt="Робота на Upwork" />
          <SubtitleLine></SubtitleLine>
        </div>
        <p className="about_list_title">У цьому уроці ви дізнаєтеся:</p>
        <ul className="about_list">
          <li className="about_item">
            <Bulb className="about_svg"></Bulb>
            <p className="about_text">
              Як створити <span className="about_span">успішний</span> профіль
              на Upwork
            </p>
          </li>
          <li className="about_item">
            {' '}
            <Bulb className="about_svg"></Bulb>
            <p className="about_text">
              <span className="about_span">презентувати себе</span> потенційним
              клієнтам
            </p>
          </li>

          <li className="about_item">
            <Bulb className="about_svg"></Bulb>
            <p className="about_text">
              знаходити проекти та відправляти листи заявки, які
              <span className="about_span"> виділять вас</span> серед інших
              кандидатів.
            </p>
          </li>
        </ul>
        <Button position="relative" isYellow={true} title="Деталі" />
        <XBlue className="x-blue"></XBlue>
      </div>
    </div>
  );
};
