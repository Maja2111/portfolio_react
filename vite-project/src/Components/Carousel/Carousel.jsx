import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import '../../Styling/carousel.css';

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //Pfeil für die nächste Seite um sich nach vorne zu bewegen
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  //Pfeil für die vorherige Seite um sich nach hinten zu bewegen
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carouselcontainer">
      <div className="carouselwrapper">
        <button className="carouselarrow carouselarrowleft" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="carouselslide">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="carouselimage"
          />
          <div className="carouselcaption">
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].description}</p>
            <div className="carousellinks">
              {projects[currentIndex].link && (
                <a
                  href={projects[currentIndex].link}
                  target="blank"
                  rel="noopener noreferrer"
                  className="carousellink"
                >
                  {' '}
                  GitHub
                </a>
              )}
              {projects[currentIndex].link && (
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carousellink"
                >
                  Live Demo
                </a>
              )}
              {/**beendet div carousellinks */}
            </div>
            {/**beendet div carouselcaption */}
          </div>
          {/**beendet div carouselslide */}
        </div>
        <button
          className="carouselarrow carouselarrowright"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        {/**beendet div carouselwrapper */}
      </div>
      <div className="carouseldots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`carouseldot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        {/**beendet div carouseldots */}
      </div>
      {/**beendet div carouselcontainer */}
    </div>
  );
};

export default Carousel;
