import React from 'react';
import { ReactComponent as TitleLine } from '../../images/svg/title-line.svg';
import { ReactComponent as Question } from '../../images/svg/question.svg';
import { ReactComponent as XYellow } from '../../images/svg/x-yellow.svg';
import { ReactComponent as XWhite } from '../../images/svg/x-white.svg';
import Button from '../Button';
import './HeroHeader.css';

export const HeroHeader = () => {
  return (
    <div className="hero">
      <div className="container ">
        <h1 className="hero_title">
          Як почати працювати на <span className="hero_title_span">Upwork</span>{' '}
          <br></br>і знайти свою ІТ професію
        </h1>
        <TitleLine></TitleLine>
        <div className="wrapper">
          <p className="hero_text_1">Чи мрієте ви...</p>
          <p className="hero_text_2">
            заробляти
            <span className="hero_text_2_span"> високу зарплату</span> в доларах
          </p>
          <Question className="hero_question"></Question>
          <XYellow className="hero_xyellow"></XYellow>
        </div>
        <p className="hero_text_3">
          Якщо так, то фріланс платформа
          <span className="hero_title_span"> Upwork</span> - це ідеальний
          варіант для вас.
          <XWhite className="hero_xwhite"></XWhite>
        </p>

        <div className="button-container">
          <Button isYellow={false} title="Деталі" />
          <Button isYellow={true} title="Зареєструватися" />
        </div>
      </div>
    </div>
  );
};
