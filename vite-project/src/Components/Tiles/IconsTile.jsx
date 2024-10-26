/**
 * @description:
 * Icons z.B. gitHub, Sass, Css, HTML und so weiter (nice to have, wenn die Icons geklickt werden können führen sie zu Projekten oder zu weiteren Informationen), ansonsten zeigen diese nur an welche Skills ich besitze bzw mit was ich gearbeitet habe
 * keine H1 benötigt
 * styling für eine 2-1 Kachel, Überlegung ob dafür ein eigens Styling notwenig ist, mouseOver  Effekte und ein herrauszoomen der Kachel
 *
 */

import React from 'react';
import '../../Styling/tile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faSass,
  faBootstrap,
  faUbuntu,
  faApple,
  faMarkdown,
} from '@fortawesome/free-brands-svg-icons';
import HoverableTileBig from './Layout/HoverableTileBig';

const IconsTile = () => {
  return (
    <div className="iconstile">
      <HoverableTileBig>
        {({ isHovered }) => (
          <div className="tilecontent">
            <h2>Skills</h2>
            <div>
              <FontAwesomeIcon icon={faGithub} className="icons" />
              <FontAwesomeIcon icon={faHtml5} className="icons" />
              <FontAwesomeIcon icon={faCss3} className="icons" />
              <FontAwesomeIcon icon={faSass} className="icons" />
              <FontAwesomeIcon icon={faJs} className="icons" />
              <FontAwesomeIcon icon={faReact} className="icons" />
              <FontAwesomeIcon icon={faBootstrap} className="icons" />
              <FontAwesomeIcon icon={faUbuntu} className="icons" />
              <FontAwesomeIcon icon={faApple} className="icons" />
              <FontAwesomeIcon icon={faMarkdown} className="icons" />
            </div>
          </div>
        )}
      </HoverableTileBig>
    </div>
  );
};
export default IconsTile;
