import React from 'react';
import './FromNastya.css';
import { ReactComponent as Instagram } from '../../images/svg/mobile/instagram.svg';
import { ReactComponent as XRingUp } from '../../images/svg/mobile/x-ring-up.svg';
import imageSrc from '../../images/photos/fromNastya.png';
import Button from '../Button';

export const FromNastya = () => {
  return (
    <div className="fromNastya">
      <XRingUp className="x_ring_up"></XRingUp>
      <img className="fromNastya_image" src={imageSrc} alt="Робота на Upwork" />
      <div className="container">
        <div className="fromNastya_wrapper">
          <div className="left_column">
            <h2 className="fromNastya_title">
              <span>ВІД НАСТІ</span> ДО ТЕБЕ 🙏
            </h2>
            <p className="fromNastya_text">
              Привіт! <br />
              Я Настя Дорошенко. <br />
              Я працюю віддалено вже більше 7 років.
              <br />Я знаходжу клієнтів з Америки, Європи і Азії через{' '}
              <span>Upwork</span>.
            </p>
          </div>
          <div className="right_column">
            <div className="social-media">
              {/* <a
                href="https://instagram.com/nancyyoungg"
                target="_blank"
                rel="noreffer noreferrer"
              >      </a>*/}
              <p>Анастасія Дорошенко</p>
              <div className="fromNastya_inst">
                <Instagram></Instagram>
                <p>@nancyyoungg</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text_wrapper_1">
          <p className="fromNastya_text">
            За останні роки багато людей втратили роботу, змінили місце
            проживання, і пройшли багато особистих криз.
          </p>
        </div>
        <div className="text_wrapper_2">
          <p className="fromNastya_text">
            <span>Моя місія</span> - допомогти людям знайти роботу онлайн,
            заробляти гроші, і працювати з дому, кав’ярні або коворкінгу.
            Працювати віддалено означає, що ви самі обираєте часи роботи,
            кількість клієнтів, проектів і свою зарплатню 🫰
          </p>
        </div>
        <div className="text_wrapper_3">
          <p className="fromNastya_text">
            Я провела більше <span>50ти консультацій</span> по Upwork за донат,
            але повторювала ту саму інформацію. Я вирішила створити цей урок для
            того, щоб ви могли переглянути його вдома в зручному для вас
            форматі.
          </p>
        </div>
        <Button isYellow={true} title="Отримати" />
      </div>
    </div>
  );
};
