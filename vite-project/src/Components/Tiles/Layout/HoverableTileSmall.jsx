/**
 * @description:
 * eine Komponete für den Hover -Effect auf den 1-1 Tilen,
 * Aboutme, Contact, CV und Projects
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HoverableTileSmall = ({ children, to, className }) => {
  //Implemtierung vom Hovereffect, standartwert false
  const [isHovered, setIsHovered] = useState(false);
  //Implementierung  der Navigation
  const navigate = useNavigate();

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  const handleClick = () => navigate(to);

  //Styling für den Hover -Effect
  const tileStyle = {
    transform: isHovered ? 'scale(0.85)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer', //cursor ändert sich auf Hand
  };

  return (
    <>
      <div
        className={`tile-small ${className}`}
        style={tileStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        {children}
      </div>
    </>
  );
};
export default HoverableTileSmall;
