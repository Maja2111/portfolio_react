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

const ContactTile = () => {
  return (
    <>
      <HoverableTileSmall to="/contact" className="contact">
        {({ isHovered }) => (
          <div className="tilecontent">
            <FontAwesomeIcon
              icon={faAddressCard}
              className="tileicon"
              style={{ color: isHovered ? 'black' : 'grey' }}
            />
            <h2 style={{ color: isHovered ? 'black' : 'grey' }}>Contact</h2>
          </div>
        )}
      </HoverableTileSmall>
    </>
  );
};
export default ContactTile;
