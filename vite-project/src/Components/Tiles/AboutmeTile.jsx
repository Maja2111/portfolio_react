/**
 * @description:
 * profil icon
 * h1 about me
 * Tile Styling
 * onClick und 'animation der Vertiefung?' eigene Komponete ist entstanden
 * führt zu der Page AboutMe
 */

import React from 'react';
import '../../Styling/tile.css';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import SmallTileLayout from './Layout/SmallTileLayout';

const AboutmeTile = () => {
  return (
    <div>
      <SmallTileLayout
        icon={faIdBadge}
        title="About Me"
        to="/aboutme"
        className="aboutmetile"
      />
    </div>
  );
};
export default AboutmeTile;
