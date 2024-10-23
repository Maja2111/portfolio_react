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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import HoverableTileSmall from './HoverableTileSmall';
import { Link } from 'react-router-dom';

const CVTile = () => {
  return (
    <Link to="/cv" className="tilelink">
      <HoverableTileSmall className="cvtile">
        <FontAwesomeIcon icon={faUserGraduate} />
        <h1>go to my CV</h1>
      </HoverableTileSmall>
    </Link>
  );
};
export default CVTile;
