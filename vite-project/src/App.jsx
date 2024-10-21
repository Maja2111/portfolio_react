import React from 'react';
import { Outlet } from 'react-router-dom';
import AboutmeTile from './Components/Tiles/AboutmeTile';

/**
 * @description:
 * benötigt alle Routes und HTML Tags
 * LanguageSwitch
 */
function App() {
  return (
    <div className="app">
      <nav>
        <AboutmeTile />
      </nav>
      <main>
        <Outlet /> {/* Outlet ist ein React Router Component */}
      </main>
    </div>
  );
}

export default App;
