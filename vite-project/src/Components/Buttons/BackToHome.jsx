/**
 * @description:
 * der Button soll auf jeder Page  erscheinen und zur Home Page navigieren
 * styling kommt um eine eigene css
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styling/backToHomeButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const BackToHomeButton = () => {
  const navigate = useNavigate();

  return (
    <button className="backtohome" onClick={() => navigate('/')}>
      <FontAwesomeIcon icon={faHome} /> Home
    </button>
  );
};

export default BackToHomeButton;
