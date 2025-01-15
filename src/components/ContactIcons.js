import React from 'react';
import '../styles/ContactIcons.css';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import telegramIcon from '../assets/telegram.png';
import whatsappIcon from '../assets/whatsapp.png';

const ContactIcons = () => {
  return (
    <div className="contact-icons d-flex flex-column">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mb-3">
        <img src={facebookIcon} alt="Facebook" className="contact-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mb-3">
        <img src={instagramIcon} alt="Instagram" className="contact-icon" />
      </a>
      <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="mb-3">
        <img src={telegramIcon} alt="Telegram" className="contact-icon" />
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="mb-3">
        <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
      </a>
    </div>
  );
};

export default ContactIcons;
