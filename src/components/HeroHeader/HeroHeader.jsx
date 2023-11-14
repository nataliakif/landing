import React from 'react';
import useIsDesktop from '../IsDesktop'; // Ensure the path is correct
import { ReactComponent as TitleLine } from '../../images/svg/mobile/title-line.svg';
import { ReactComponent as TitleLineDesktop } from '../../images/svg/desktop/title-line-desktop.svg';
import { ReactComponent as Up } from '../../images/svg/mobile/upwork3.svg';
import { ReactComponent as XYellow } from '../../images/svg/mobile/x-yellow.svg';
import { ReactComponent as XWhite } from '../../images/svg/mobile/x-white.svg';
import { ReactComponent as XYellowDesktop } from '../../images/svg/desktop/x-yellow-desktop.svg';
import Button from '../Button';
import './HeroHeader.css';

export const HeroHeader = () => {
  const isDesktop = useIsDesktop();

  return (
    <div className="hero">
      <div className="container">
        {isDesktop ? <XYellowDesktop /> : <XYellow className="hero_xyellow" />}
        <h1 className="hero_title">
          Як почати працювати на <span className="hero_title_span">Upwork</span>{' '}
          і знайти свою ІТ професію
        </h1>

        {isDesktop ? (
          <TitleLineDesktop />
        ) : (
          <>
            <TitleLine className="title_line" />
            <p className="hero_text_1">
              Чи мрієте ви...
              <Up className="hero_question" />
            </p>
            <p className="hero_text_2">
              заробляти
              <span className="hero_text_2_span"> високу зарплату</span> в
              доларах
            </p>
            <p className="hero_text_3">
              Якщо так, то фріланс платформа
              <span className="hero_title_span"> Upwork</span> - це ідеальний
              варіант для вас.
              <XWhite className="hero_xwhite" />
            </p>
          </>
        )}

        <div className="button-container">
          <Button isYellow={false} title="Деталі" />
          <Button isYellow={true} title="Зареєструватися" />
        </div>
      </div>
    </div>
  );
};
