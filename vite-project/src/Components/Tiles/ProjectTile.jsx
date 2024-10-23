/**
 * @description:
 * h1: Projects
 * Fragment Icon
 * Tile Styling
 * onClick und 'animation der Vertiefung?'
 * führt zu der Page -> Project
 */

import React from 'react';
import '../../Styling/tile.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import HoverableTileSmall from './HoverableTileSmall';

const ProjectTile = ({ isHovered }) => {
  return (
    <Link to="/projects" className="tilelink">
      <HoverableTileSmall className="projecttile">
        <div className="tilecontent">
          <FontAwesomeIcon
            icon={faCode}
            className="tileicon"
            style={{ color: isHovered ? 'black' : 'grey' }}
          />
          <h2 style={{ color: isHovered ? 'black' : 'grey' }}>Projects</h2>
        </div>
      </HoverableTileSmall>
    </Link>
  );
};
export default ProjectTile;
