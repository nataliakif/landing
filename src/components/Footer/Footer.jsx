import React from 'react';
import './Footer.css';

import { ReactComponent as Instagram } from '../../images/svg/mobile/instagram_footer.svg';
import { ReactComponent as Telegram } from '../../images/svg/mobile/telegram_footer.svg';
import { ReactComponent as Facebook } from '../../images/svg/mobile/facebook_footer.svg';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="social_links">
          <div>
            <a
              className="social_link"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram></Instagram>
            </a>
            <a
              className="social_link"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook></Facebook>
            </a>
            <a
              className="social_link"
              href="https://www.instagram.com"
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
