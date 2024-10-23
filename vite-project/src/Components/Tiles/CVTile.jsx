/**
 * @description:
 * Icon paper
 * h1 go to my CV
 * Tile Styling
 * onClick und 'animation der Vertiefung?'
 * führt zu der Page  mit dem CV
 */

import React from 'react';
import '../../Styling/tile.css';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import SmallTileLayout from './Layout/SmallTileLayout';

const CVTile = () => {
  return (
    <SmallTileLayout
      icon={faUserGraduate}
      title="go to my CV"
      to="/cv"
      className="cvtile"
    />
  );
};
export default CVTile;
