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
import { faCode } from '@fortawesome/free-solid-svg-icons';
import SmallTileLayout from './Layout/SmallTileLayout';

const ProjectTile = () => {
  return (
    <SmallTileLayout
      icon={faCode}
      title="Projects"
      to="/projects"
      className="projecttile"
    />
  );
};
export default ProjectTile;
