import React from 'react';
import './HeroHeader.css';

export const HeroHeader = () => {
  return (
    <div className="start_section">
      <div className="container start_container">
        <div className="start_section_wrapper">
          <h1 className="start_section_title">
            Як почати працювати на{' '}
            <span className="start_section_title_span">Upwork</span> <br></br>і
            знайти свою ІТ професію
          </h1>

          <img
            className="clip-path-group"
            alt="Clip path group"
            src="clip-path-group.svg"
          />
        </div>
        <div className="frame-2">
          <div className="text-paragraph">
            <div className="text">Чи мрієте ви...</div>
          </div>
          <div className="text-paragraph-2">
            <p className="p">
              <span className="text-wrapper-2">заробляти </span>
              <span className="text-wrapper-3">високу зарплату</span>
              <span className="text-wrapper-2"> в доларах</span>
            </p>
            <div className="min-width-change">
              <div className="ignore" />
              <div className="ignore" />
            </div>
          </div>
          <img className="img" alt="Frame" src="frame-721.svg" />
        </div>

        <img className="vector" alt="Vector" src="vector.svg" />

        <div className="div-wrapper">
          <p className="text-2">
            <span className="text-wrapper-4">Якщо так, то фріланс </span>
            <span className="text-wrapper-5">платформа</span>
            <span className="text-wrapper-6">&nbsp;</span>
            <span className="text-wrapper-7">Upwork</span>
            <span className="text-wrapper-4">
              {' '}
              - це ідеальний варіант для вас.
            </span>
          </p>
        </div>
        <img className="vector-2" alt="Vector" src="image.svg" />
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-3">Деталі</div>
          </div>
          <div className="frame-5">
            <div className="text-4">Зареєструватися</div>
          </div>
        </div>
      </div>
    </div>
  );
};
