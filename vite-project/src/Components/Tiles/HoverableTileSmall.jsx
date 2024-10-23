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
    <div
      className={`tile-small ${className}`}
      style={tileStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {/*Iteriert über alle Kind-Elemente und klont sie mit zusätzlicher isHovered-Prop:
        - React.Children.map: Sicheres Iterieren über children, auch wenn nur ein Kind vorhanden ist.
        - React.cloneElement: Erstellt eine Kopie jedes Kind-Elements.
        - { isHovered }: Fügt die isHovered-Prop zum geklonten Element hinzu.
        
        Zweck:
        - Ermöglicht den Kinder-Komponenten, auf den Hover-Zustand zu reagieren, ohne ihn selbst verwalten zu müssen.
        - Erhält die ursprüngliche Struktur und Props der Kinder, während isHovered hinzugefügt wird.
        - Macht die HoverableTile flexibel für verschiedene Inhalte und Anwendungsfälle.*/}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isHovered })
      )}
    </div>
  );
};
export default HoverableTileSmall;
