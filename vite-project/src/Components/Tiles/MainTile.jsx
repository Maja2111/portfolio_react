/**
 * @description:
 * h1: Sabine Weber
 * h2: Titel
 * Styling von der Kachel 2-1
 * Icon MERN Stack
 */

import React from 'react';
import HoverableTileBig from './Layout/HoverableTileBig';
import '../../Styling/tile.css';

const MainTile = () => {
  return (
    <div className="maintile">
      <HoverableTileBig>
        {({ isHovered }) => (
          <div className="tilecontent">
            <h1 style={{ color: isHovered ? 'black' : 'grey' }}>
              Sabine Weber
            </h1>
            <h2 style={{ color: isHovered ? 'black' : 'grey' }}>
              zukünftige Web-und Software Developer
            </h2>
            <img
              src="./src/Images/MERN-img.png"
              alt="MERN-Stack-Logo"
              className="maintileimg"
            />
          </div>
        )}
      </HoverableTileBig>
    </div>
  );
};
export default MainTile;
