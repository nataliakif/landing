import React from 'react';
import './Footer.css';

import { ReactComponent as Instagram } from '../../images/svg/mobile/instagram_footer.svg';
import { ReactComponent as Telegram } from '../../images/svg/mobile/telegram_footer.svg';
import { ReactComponent as TikTok } from '../../images/svg/mobile/tiktok.svg';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="social_links">
          <div className="social_wrapper">
            <a
              className="social_link"
              href="https://instagram.com/nancyyoungg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram></Instagram>
            </a>
            <a
              className="social_link"
              href="https://www.tiktok.com/@nancyyoung940"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTok></TikTok>
            </a>
            <a
              className="social_link"
              href="https://t.me/nancyyounggg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram></Telegram>
            </a>
          </div>
          <p className="footer_text">ФОП Дорошенко Анастасія | ІНН 3347913548 | Design by <a href="https://t.me/agnettaUA/">@agnettaUA</a></p>
        </div>
      </div>
    </div>
  );
};
