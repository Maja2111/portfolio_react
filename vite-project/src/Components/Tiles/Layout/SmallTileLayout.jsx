import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HoverableTileSmall from './HoverableTileSmall';

const SmallTileLayout = ({ icon, title, to, className, isHovered }) => {
  return (
    <HoverableTileSmall>
      <Link to={to} className={`tilelink ${className}`}>
        <div className="tilesmall">
          <div className="tilecontent">
            <FontAwesomeIcon
              icon={icon}
              className="tileicon"
              style={{ color: isHovered ? 'white' : 'grey' }}
            />
            <h2
              style={{
                border: '1px soild red',
                color: isHovered ? 'white' : 'grey',
              }}
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </HoverableTileSmall>
  );
};
export default SmallTileLayout;
