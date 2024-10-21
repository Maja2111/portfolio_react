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

import React from 'react';
import '../Styling/tile.css';
import LanguageSwitch from '../Components/Buttons/LanguageSwitch';
import BackHomeButton from '../Components/Buttons/BackToHome';

const Contact = () => {
  return (
    <>
      <header>
        <div className="contactContainer">
          {/*animateTitle findet Verwendung in pagesStyling.css und wird auf jeder page benötigt*/}
          <h1 className="animateTitle">Contact</h1>
          <LanguageSwitch />
        </div>
      </header>
      <main>
        <form action="">
          <label htmlFor="fullname">Vor-und Nachname</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Dein Vor-und Nachname"
          />
          <label htmlFor="email" placeholder="Deine Email">
            Email
          </label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="deine Nachricht für mich"
          >
            Nachricht
          </textarea>
          <button type="submit">Senden</button>
        </form>
      </main>
      <footer>
        <BackHomeButton />
      </footer>
    </>
  );
};
export default Contact;
