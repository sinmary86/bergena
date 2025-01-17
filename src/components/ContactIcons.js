import React from 'react';
import '../styles/ContactIcons.css';
import { contactIconsData } from '../data/dataIcons'; // Импортируем данные

const ContactIcons = () => {
  return (
    <div className="contact-icons d-flex flex-column">
      {contactIconsData.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3"
        >
          <img src={icon.src} alt={icon.alt} className="contact-icon" />
        </a>
      ))}
    </div>
  );
};

export default ContactIcons;
