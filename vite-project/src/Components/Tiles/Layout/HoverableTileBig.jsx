/**
 * @description:
 * eine Komponete für den Hover -Effect auf den 2-1 Tilen,
 * MainTile, IconTile
 */

import React from 'react';
import { useState } from 'react';

const HoverableTileBig = ({ children, className }) => {
  //Implemtierung vom Hovereffect, standartwert false
  const [isHovered, setIsHovered] = useState(false);
  //Eventhandler MouserOver, state verändert sich  auf true
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  // Eventhandler MouserOut, state verändert sich auf false
  const handleMouseOut = () => {
    setIsHovered(false);
  };
  //Styling für den Hover
  const tileStyle = {
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
  };
  return (
    <div
      className={`tile ${className}`}
      style={tileStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {typeof children === 'function' ? children({ isHovered }) : children}
      {children}
    </div>
  );
};
export default HoverableTileBig;
