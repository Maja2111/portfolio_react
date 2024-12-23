/**
 * @description:
 * benötigt alle Routes und HTML Tags
 * LanguageSwitch
 */

import React from 'react';
import './Styling/main.css';
import MainTile from './Components/Tiles/MainTile';
import AboutmeTile from './Components/Tiles/AboutmeTile';
import CVTile from './Components/Tiles/CVTile';
import ContactTile from './Components/Tiles/ContactTile';
import ProjectTile from './Components/Tiles/ProjectTile';
import IconsTile from './Components/Tiles/IconsTile';
import { LanguageProvider } from './Components/Language/LanguageContext';
import LanguageSwitch from './Components/Language/LanguageSwitch';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <LanguageSwitch />
        <nav className="tilecontainer">
          <MainTile />
          <AboutmeTile />
          <CVTile />
          <ContactTile />
          <ProjectTile />
          <IconsTile />
        </nav>
      </div>
    </LanguageProvider>
  );
}

export default App;
