/**
 * @description:
 * taucht auf der Homepage und den Pages auf, Frage der Notwenigkeit ihn überall einzubinden oder reicht es auf der Home page und er übersetzt alle Pages?
 * Styling über eine eigenen css
 * eventuelle neue Komponenten notwenig
 */
import React from 'react';
import { useLanguage } from './LanguageContext';
import './languageSwitch.css';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div className="languageSwitch">
      <button onClick={toggleLanguage}>
        {language === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
      </button>
    </div>
  );
};
export default LanguageSwitch;
