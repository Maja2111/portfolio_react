import React from 'react';
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
} from '@fortawesome/free-brands-svg-icons';
//import Styling noch unklar

const IconsTile = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faHtml5} />
      <FontAwesomeIcon icon={faCss3} />
      <FontAwesomeIcon icon={faSass} />
      <FontAwesomeIcon icon={faJs} />
      <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faBootstrap} />
      <FontAwesomeIcon icon={faUbuntu} />
      <FontAwesomeIcon icon={faApple} />
    </div>
  );
};
export default IconsTile;

/**
 * @description:
 * Icons z.B. gitHub, Sass, Css, HTML und so weiter (nice to have, wenn die Icons geklickt werden können führen sie zu Projekten oder zu weiteren Informationen), ansonsten zeigen diese nur an welche Skills ich besitze bzw mit was ich gearbeitet habe
 * keine H1 benötigt
 * styling für eine 2-1 Kachel, Überlegung ob dafür ein eigens Styling notwenig ist, mouseOver  Effekte und ein herrauszoomen der Kachel
 *
 */
