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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import HoverableTileSmall from './HoverableTileSmall';
import { Link } from 'react-router-dom';

const ContactTile = ({ isHovered }) => {
  return (
    <Link to="/contact" className="tilelink">
      <HoverableTileSmall className="contacttile">
        <div className="tilecontent">
          <FontAwesomeIcon
            icon={faAddressCard}
            className="tileicon"
            style={{ color: isHovered ? 'black' : 'grey' }}
          />
          <h2 style={{ color: isHovered ? 'black' : 'grey' }}>Contact</h2>
        </div>
      </HoverableTileSmall>
    </Link>
  );
};
export default ContactTile;
