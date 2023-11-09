import React from 'react';
import './WhatElse.css';
import { ReactComponent as TitleLine } from '../../images/svg/title-line.svg';
import { ReactComponent as Subparagraphs } from '../../images/svg/subparagraphs.svg';
import { ReactComponent as XYellow } from '../../images/svg/x-yellow.svg';
import { ReactComponent as XWhite } from '../../images/svg/x-white.svg';
import Button from '../Button';

export const WhatElse = () => {
  return (
    <div className="whatElse">
      <div className="container">
        <div className="wrapper">
          <h2 className="whatElse_title">Що ще?</h2>
          <TitleLine></TitleLine>
          <div className="list_wrapper">
            <Subparagraphs className="whatElse_sub"></Subparagraphs>
            <XYellow className="whatElse_xyellow"></XYellow>
            <XWhite className="whatElse_xwhite"></XWhite>
            <ul className="whatElse_list">
              <li>
                Як заповнити свій профіль, щоб він був привабливим для клієнтів
              </li>
              <li>
                Як написати ефективну презентацію, яка покаже ваші сильні
                сторони
              </li>
              <li>
                Як знайти проекти, які відповідають вашим навичкам і досвіду
              </li>
              <li>
                Як написати лист заявки, який зробить вас найкращим кандидатом
              </li>
              <li>Як виділитися серед інших фрілансерів</li>
            </ul>
          </div>
        </div>

        <div className="button-container">
          <Button isYellow={false} title="Деталі" />
          <Button isYellow={true} title="Зареєструватися" />
        </div>
      </div>
    </div>
  );
};
