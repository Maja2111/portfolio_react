/**
 * @description : Contact page
 * * der Language ToogleSwitch -> braucht auch ein eigenes Styling
 *  * es wird eine H1 mit Contact geben -> Animation
 * h2 mit Message
 * Contaktormular:
 * Vorname
 * Nachname
 * Email
 * Textfeld -> alles mit Placeholdern, einem Input und einem Labelfeld
 * meine Contact Icons: LinkIn, Instagram, gitHub und Slack inclusive Verlinkungen
 * ein submit Button
 * back to home Button
 */

import React, { useState } from 'react';
import '../Styling/stylingPages/pagesStyling.css';
import '../Styling/stylingPages/contactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../Components/Language/LanguageContext';
import LanguageSwitch from '../Components/Language/LanguageSwitch';
import BackHomeButton from '../Components/Buttons/BackToHome';

const Contact = () => {
  const { language } = useLanguage();
  //State für Formularfelder
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  //Eventhandler für die Formularänderungen
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  //Eventhandler für den Submit Button
  const handleSubmit = (event) => {
    event.preventDefault();
    //hier soll eine email gesendet werden- Infos in der Readme
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contactPage">
      <header>
        <div className="containerHeader">
          <h1 className="animateTitle">
            {language === 'de' ? 'Kontakt' : 'Contact'}
          </h1>
          <LanguageSwitch />
        </div>
      </header>

      <main className="contactMain">
        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="fullname">
              {language === 'de' ? 'dein Vor-und Nachname' : 'your fullname'}
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Max Mustermann"
            />
            {/**schließendes div formGroup fullname */}
          </div>
          <div className="fromgroup">
            <label htmlFor="email">
              {language === 'de' ? 'deine  Email' : 'your email'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="max@mustermann.de"
            />
            {/**schließendes div formGroup email */}
          </div>
          <div className="formGroup">
            <label htmlFor="message">
              {language === 'de' ? 'deine Nachricht' : 'your message'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
            ></textarea>
            {/**schließendes div formGroup message */}
          </div>
          <button type="submit">Senden</button>
        </form>
        <div className="socialLinks">
          <a
            href="www.linkedin.com/in/sabine-weber-76004722b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/sabine_21_weber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://github.com/Maja2111/Maja2111.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://dcistudents.slack.com/team/U061UMSE2CB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSlack} />
          </a>
          {/**schließendes div socialLinks */}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Sabine Weber</p>
        <BackHomeButton />
      </footer>
      {/**schließendes div contactPage */}
    </div>
  );
};
export default Contact;
