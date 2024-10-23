/**
 * @description:
 * Icon Contact
 * H1 Contact
 * Tile Styling
 * onClick und 'animation der Vertiefung?'
 * führt zu der Page Contact
 */

import React from 'react';
import '../../Styling/tile.css';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import SmallTileLayout from './Layout/SmallTileLayout';

const ContactTile = () => {
  return (
    <SmallTileLayout
      icon={faAddressCard}
      title="Contact"
      to="/contact"
      className="contacttile"
    />
  );
};
export default ContactTile;
