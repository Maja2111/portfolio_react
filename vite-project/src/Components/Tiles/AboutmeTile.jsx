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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import HoverableTileSmall from './HoverableTileSmall';

const AboutmeTile = ({ isHovered }) => {
  return (
    <>
      <HoverableTileSmall to="/aboutme" className="aboutmetile tilecontainer">
        <div className="tilecontent">
          <FontAwesomeIcon
            icon={faIdBadge}
            className="tileicon"
            style={{ color: isHovered ? 'black' : 'grey' }}
          />
          <h2 style={{ color: isHovered ? 'black' : 'grey' }}>About Me</h2>
        </div>
      </HoverableTileSmall>
    </>
  );
};
export default AboutmeTile;
