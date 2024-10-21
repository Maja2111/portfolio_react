/**
 * @description für AboutMe
 * h1 mit Über mich/ About Me -> Animation die h1 fliegt von links nach rechts bis zur mitte ein
 * der Language ToogleSwitch -> braucht auch ein eigenes Styling
 * ein paar allgemeine Informationen zu mir und ein Foto
 * verlinkungen zu der Contact page,  CV und Reiter Projects
 * back to home button
 */

import React from 'react';
import 'vite-project/src/Styling/pagesStyling.css';
import BackToHomeButton from './BackToHomeButton';
import LanguageSwitch from './LanguageSwitch';

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      {' '}
      {/*äußeres div statt Fragmente*/}
      <header>
        {/*animateTitle findet Verwendung in pagesStyling.css und wird auf jeder page benötigt*/}
        <h1 className="animateTitle">Herzlich Willkommen</h1>
        <LanguageSwitch />
      </header>
      <main>
        {/*aufgeteilte in 2 sections*/}
        <section>
          <h2>Persönliches</h2>
          <p>
            Ich bin Sabine und freue mich über deinen Besuch. Alles zu meinem
            Beruflichen Werdegang findest du unter meinem CV. Ansonsten ich bin
            verheiratet mit einem Dipl. Datenbankentwickler und Mutter einer
            fantastischen Tochter. Ich lebe in Hamburg und habe hier meine
            Heimat gefunden. Ich bin lebenslustig, Teamfähig, kommunikativ,
            effizient, lerne schnell, bin kreativ und finde schnell Anschluss.
            Noch Fragen? Dann kontaktire mich gerne über mein Contact Formular
          </p>
        </section>
        <section>
          <h2>Was erwartet dich hier bei mir?</h2>
          <p>
            Du findest eine Auswahl an Projekte an denen ich während meiner
            Ausbildung am DCI gearbeitet habe. Hier siehst du meine Entwicklung
            vom Orientierungskurs über den Jahreskurs hinweg. Das findest du bei
            meinen Reiter Projects
          </p>
        </section>
      </main>
      <footer>
        <BackToHomeButton />
      </footer>
    </div>
  );
};
export default AboutMe;
