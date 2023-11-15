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
          <div>
            <a
              className="social_link"
              href="https://instagram.com/nancyyoungg?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram></Instagram>
            </a>
            <a
              className="social_link"
              href="https://www.tiktok.com/@nancyyoung940?_t=8hNecghCbrC&_r=1"
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
          <p className="footer_text">Created by @agnettaUA</p>
        </div>
      </div>
    </div>
  );
};
