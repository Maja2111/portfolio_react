import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(); //Implementierung des Language Contexts

export const LanguageProvider = ({ children }) => {
  // Implementierung des Language Providers
  const [language, setLanguage] = useState('de'); //defaultwert deutsch
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'de' ? 'en' : 'de')); //der  switch zwischen de und en
  };
  return (
    //verwaltet den Zustand der sprache und ermöglicht den switch
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

//useContext hook zum Abrufen des  Language Contexts
export const useLanguage = () => {
  return useContext(LanguageContext);
};
