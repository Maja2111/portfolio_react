/**
 * @description für AboutMe
 * h1 mit Über mich/ About Me -> Animation die h1 fliegt von links nach rechts bis zur mitte ein
 * der Language ToogleSwitch -> braucht auch ein eigenes Styling
 * ein paar allgemeine Informationen zu mir und ein Foto
 * verlinkungen zu der Contact page,  CV und Reiter Projects
 * back to home button
 */

import React from 'react';
import '../Styling/stylingPages/pagesStyling.css';
import '../Styling/stylingPages/aboutmePage.css';
import BackToHomeButton from '../Components/Buttons/BackToHome';
import { useLanguage } from '../Components/Language/LanguageContext';
import LanguageSwitch from '../Components/Language/LanguageSwitch';

const AboutMe = () => {
  const { language } = useLanguage();
  return (
    <div className="aboutMeContainer">
      <header>
        {/*animateTitle findet Verwendung in pagesStyling.css und wird auf jeder page benötigt*/}
        <h1 className="animateTitle">
          {language === 'de' ? 'Herzlich Willkommen' : 'Warm Welcome'}
        </h1>
        <LanguageSwitch />
      </header>
      <main>
        <img
          src="../Images/Profilbild.jpg"
          alt="Profilbild"
          className="profilbild"
        />
        {/*aufgeteilte in 2 sections*/}
        <section>
          <h2>{language === 'de' ? 'Persönliches' : 'Personality'}</h2>
          <p>
            {language === 'de'
              ? 'Ich bin Sabine und freue mich über deinen Besuch. Alles zu meinem beruflichem Werdegang findest du unter meinem CV. Ansonsten ich bin verheiratet mit einem Dipl. Datenbankentwickler und Mutter einer fantastischen Tochter. Ich lebe in Hamburg und habe hier meine Heimat gefunden. Ich bin lebenslustig, Teamfähig, kommunikativ, effizient, lerne schnell, bin kreativ und finde schnell Anschluss. Noch Fragen? Dann kontaktire mich gerne über mein Contact Formular'
              : 'I am Sabine and I am happy about your visit. Everything about my professional career can be found under my CV. Apart from that I am married to a qualified database developer and mother of a fantastic daughter. I live in Hamburg and have found my found my home here. I am fun-loving, a team player, communicative, efficient, quick learner, creative and easy to get along with. Do you have any questions? Then feel free to contact me via my contact form'}
          </p>
        </section>
        <section>
          <h2>
            {language === 'de'
              ? 'Was erwartet dich hier bei mir?'
              : 'What can you expect here with me?'}
          </h2>
          <p>
            {language === 'de'
              ? 'Du findest eine Auswahl an Projekte an denen ich während meiner Ausbildung am DCI gearbeitet habe. Hier siehst du meine Entwicklung vom Orientierungskurs über den Jahreskurs hinweg. Das findest du bei meinen Reiter Projects'
              : 'You will find a selection of projects I have worked on during my training at the DCI. Here you can see my development from the orientation course through the annual course. You can find this in my Projects'}
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
