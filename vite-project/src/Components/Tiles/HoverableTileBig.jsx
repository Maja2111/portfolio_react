/**
 * @description:
 * eine Komponete für den Hover -Effect auf den 2-1 Tilen,
 * MainTile, IconTile
 */

import React from 'react';
import { useState } from 'react';

const HoverableTileBig = ({ children, className }) => {
  //Implemtierung vom Hovereffect, standartwert false
  const [isHoverd, setIsHoverd] = useState(false);
  //Eventhandler MouserOver, state verändert sich  auf true
  const handleMouseOver = () => {
    setIsHoverd(true);
  };
  // Eventhandler MouserOut, state verändert sich auf false
  const handleMouseOut = () => {
    setIsHoverd(false);
  };
  //Styling für den Hover
  const tileStyle = {
    transform: isHoverd ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
  };
  return (
    <div
      className="tile aboutmetile"
      style={tileStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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
        React.cloneElement(child, { isHoverd })
      )}
    </div>
  );
};
export default HoverableTileBig;
