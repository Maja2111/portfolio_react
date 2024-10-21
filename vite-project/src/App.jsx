import React from 'react';
import { Outlet } from 'react-router-dom';
import MainTile from './Components/Tiles/MainTile';
import AboutmeTile from './Components/Tiles/AboutmeTile';
import CVTile from './Components/Tiles/CVTile';
import ContactTile from './Components/Tiles/ContactTile';
import Projects from './Components/Tiles/ProjectTile';
import IconsTile from './Components/Tiles/IconsTile';
import LanguageSwitch from './Components/Buttons/LanguageSwitch';

/**
 * @description:
 * benötigt alle Routes und HTML Tags
 * LanguageSwitch
 */
function App() {
  return (
    <div className="app">
      <LanguageSwitch />{' '}
      <nav>
        <MainTile />
        <AboutmeTile />
        {/* <CVTile />
        <ContactTile />
        <Projects />
        <IconsTile /> */}
      </nav>
      <main>
        <Outlet /> {/* Outlet ist ein React Router Component */}
      </main>
    </div>
  );
}

export default App;
